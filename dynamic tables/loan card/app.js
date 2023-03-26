// data
const data = [
    { name: "John Doe", age: 32, gender: "Male" },
    { name: "Jane Smith", age: 25, gender: "Female" },
    { name: "Bob Johnson", age: 43, gender: "Male" },
    { name: "Sarah Lee", age: 29, gender: "Female" },
    { name: "Alex Kim", age: 36, gender: "Male" }
  ];

const table = document.createElement('table');
const headerRow = document.createElement('tr');
let headers = ["name", "age","gender"];

for(let i=0;i<headers.length;i++){
let headerCell = document.createElement('th');
headerCell.innerText = headers[i];
headerRow.appendChild(headerCell);    
}

table.appendChild(headerRow);
const leftTable = document.getElementById('left');
leftTable.appendChild(table);