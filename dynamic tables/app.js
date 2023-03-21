// Get reference to the table element in HTML
const table = document.getElementById("my-table");

// // Define the data for the table in a 2D array
// const data = [
//   ["John", "Doe", 35],
//   ["Jane", "Smith", 27],
//   ["Bob", "Johnson", 42],
// ];

// // Loop through the data and create table rows and cells dynamically
// for (let i = 0; i < data.length; i++) {
//   // Create a new row for each item in the data array
//   const row = table.insertRow();

//   // Loop through each item in the row array and create a new cell for each item
//   for (let j = 0; j < data[i].length; j++) {
//     // Create a new cell for each item in the row array
//     const cell = row.insertCell();

//     // Set the cell's text to the current item in the row array
//     cell.textContent = data[i][j];
//   }
// }

// Define the data for the tables in 2D arrays
const tableData = [
    ["John", "Doe", "https://via.placeholder.com/150x150"],
    ["Jane", "Smith", "https://via.placeholder.com/150x150"],
    ["Bob", "Johnson", "https://via.placeholder.com/150x150"],
  ];
  
  // Define the table headings for each table
  const tableHeadings = ["First Name", "Last Name", "Image"];
  
  // Loop through the tableData array to create the tables dynamically
  for (let i = 1; i <= 3; i++) {
    // Get a reference to the current table element
    const table = document.getElementById("table" + i);
  
    // Create a new row for the table headings
    const headingRow = table.insertRow();
  
    // Loop through the tableHeadings array and create a new cell for each heading
    for (let j = 0; j < tableHeadings.length; j++) {
      // Create a new cell for each heading
      const headingCell = headingRow.insertCell();
  
      // Set the cell's text to the current heading
      headingCell.textContent = tableHeadings[j];
    }
  
    // Loop through the tableData array and create a new row and cell for each item
    for (let k = 0; k < tableData.length; k++) {
      // Create a new row for each item in the data array
      const row = table.insertRow();
  
      // Loop through each item in the row array and create a new cell for each item
      for (let l = 0; l < tableData[k].length; l++) {
        // Create a new cell for each item in the row array
        const cell = row.insertCell();
  
        // If the current cell is the image cell, create an image element and set its src and alt attributes
        if (l === 2) {
          const img = document.createElement("img");
          img.src = tableData[k][l];
          img.alt = tableData[k][0] + " " + tableData[k][1];
          cell.appendChild(img);
        } else {
          // Set the cell's text to the current item in the row array
          cell.textContent = tableData[k][l];
        }
      }
    }
  }
  
  