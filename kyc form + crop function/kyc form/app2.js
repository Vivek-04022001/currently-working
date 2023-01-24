const labels = document.querySelectorAll('.container-button label');
console.log(labels);

labels.forEach((label)=>{
    label.addEventListener('click',function(e){
        e.preventDefault();
        openModal();
        
    })
})



// /---------------------------------------------------------------
// /---------------------------------------------------------------
// /---------------------------------------------------------------


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const body =
console.log(btnsOpenModal);

const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

const closeModal = function () {
  console.log('close button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.classList.remove('stop-scroll');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});