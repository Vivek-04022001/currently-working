// Create an array of objects with dynamic data
const data = [
    { name: "John", age: 28, gender: "Male", city: "New York" },
    { name: "Sarah", age: 32, gender: "Female", city: "Los Angeles" },
    { name: "Tom", age: 25, gender: "Male", city: "Chicago" },
    { name: "Jane", age: 30, gender: "Female", city: "San Francisco" },
    { name: "Alex", age: 35, gender: "Male", city: "Seattle" },
    { name: "Emily", age: 29, gender: "Female", city: "Denver" },
    { name: "Mike", age: 27, gender: "Male", city: "Austin" },
    { name: "Jenny", age: 31, gender: "Female", city: "Boston" },
    { name: "Chris", age: 26, gender: "Male", city: "Atlanta" },
    { name: "Lily", age: 33, gender: "Female", city: "Miami" },
  ];
  
  // Get the table element by its ID
  const table = document.getElementById("my-table");
  
  // Create a header row
  const headerRow = table.insertRow();
  ["Name", "Age", "Gender", "City"].forEach((headerText) => {
    const headerCell = headerRow.insertCell();
    headerCell.textContent = headerText;
  });
  
  // Loop through the data and create a new row for each object
  data.forEach((item) => {
    const row = table.insertRow();
    ["name", "age", "gender", "city"].forEach((prop) => {
      const cell = row.insertCell();
      cell.textContent = item[prop];
    });
  });
  