const labels = document.querySelectorAll('.container-button label');
const body = document.body;

// event handler
labels.forEach(label=>{
  label.addEventListener('click',function(e){
    console.log('clicked');
    e.preventDefault();
    openModal();
  })
})


// ---------------------------------------

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  body.classList.add('stop-scroll')
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

const closeModal = function () {
  console.log('close button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  body.classList.remove('stop-scroll')

};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});