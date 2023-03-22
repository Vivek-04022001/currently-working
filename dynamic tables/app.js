const loanData = [
  {
    "Member photo": "https://via.placeholder.com/40",
    "Member Id": "M001",
    "Loan Id": "L001",
    "Date of application": "2022-03-20",
    "Member Name": "John Doe",
    "Loan Type": "Personal Loan",
    "Loan Amount": 50000,
    Purpose: "Home Renovation",
    "sub-purpose": "Kitchen Renovation",
    "Loan cycle": 1,
    Tenure: 36,
    "Bank Name": "ABC Bank",
    "IFSC code": "ABCD1234567",
    ROI: 12,
    LPF: 1.5,
    "Insurance Premium": 1000,
    "Net Loan Amount after deduction": 48350,
    "disbursment mode": "Cheque",
    "Revenue Stamp": 500,
  },
  {
    "Member photo": "https://via.placeholder.com/40",
    "Member Id": "M002",
    "Loan Id": "L002",
    "Date of application": "2022-03-15",
    "Member Name": "Jane Doe",
    "Loan Type": "Home Loan",
    "Loan Amount": 1000000,
    Purpose: "Purchase of new house",
    "sub-purpose": "NA",
    "Loan cycle": 2,
    Tenure: 240,
    "Bank Name": "XYZ Bank",
    "IFSC code": "XYZW9876543",
    ROI: 8.5,
    LPF: 2,
    "Insurance Premium": 5000,
    "Net Loan Amount after deduction": 975000,
    "disbursment mode": "NEFT",
    "Revenue Stamp": 2000,
  },
  {
    "Member photo": "https://via.placeholder.com/40",
    "Member Id": "M003",
    "Loan Id": "L003",
    "Date of application": "2022-03-10",
    "Member Name": "Bob Smith",
    "Loan Type": "Car Loan",
    "Loan Amount": 750000,
    Purpose: "Purchase of new car",
    "sub-purpose": "NA",
    "Loan cycle": 3,
    Tenure: 60,
    "Bank Name": "PQR Bank",
    "IFSC code": "PQRS5678901",
    ROI: 9.5,
    LPF: 1,
    "Insurance Premium": 2500,
    "Net Loan Amount after deduction": 740000,
    "disbursment mode": "RTGS",
    "Revenue Stamp": 1000,
  },
  {
    "Member photo": "https://via.placeholder.com/40",
    "Member Id": "M004",
    "Loan Id": "L004",
    "Date of application": "2022-03-05",
    "Member Name": "Alice Lee",
    "Loan Type": "Education Loan",
    "Loan Amount": 200000,
    Purpose: "MBA Program",
    "sub-purpose": "NA",
    "Loan cycle": 2,
    Tenure: 120,
    "Bank Name": "LMN Bank",
    "IFSC code": "LMNO2345678",
    ROI: 11,
    LPF: 1.8,
    "Insurance Premium": 1500,
    "Net Loan Amount after deduction": 740000,
    "disbursment mode": "RTGS",
    "Revenue Stamp": 1000,
  },
  {
    "Member photo": "https://via.placeholder.com/40",
    "Member Id": "M005",
    "Loan Id": "L005",
    "Date of application": "2022-03-05",
    "Member Name": "Alice Lee",
    "Loan Type": "Education Loan",
    "Loan Amount": 200000,
    Purpose: "MBA Program",
    "sub-purpose": "NA",
    "Loan cycle": 2,
    Tenure: 120,
    "Bank Name": "LMN Bank",
    "IFSC code": "LMNO2345678",
    ROI: 11,
    LPF: 1.8,
    "Insurance Premium": 1500,
    "Net Loan Amount after deduction": 740000,
    "disbursment mode": "RTGS",
    "Revenue Stamp": 1000,
  },
];

const table = document.getElementById("myTable");
const thead = table.createTHead();
const tbody = table.createTBody();

const headers = [
  "Member photo",
  "Member Id",
  "Loan Id",
  "Date of application",
  "Member Name",
  "Loan Type",
  "Loan Amount",
  "Purpose",
  "sub-purpose",
  "Loan cycle",
  "Tenure",
  "Bank Name",
  "IFSC code",
  "ROI",
  "LPF",
  "Insurance Premium",
  "Net Loan Amount after deduction",
  "disbursment mode",
  "Revenue Stamp",
];

// create table header

const headerRow = thead.insertRow(0);
for (let i = 0; i < headers.length; i++) {
  const header = document.createElement("th");
  header.innerHTML = headers[i];
  headerRow.appendChild(header);
}

// Create table body
loanData.forEach((loan, index) => {
  const row = tbody.insertRow(index);

  for (const key in loan) {
    const cell = row.insertCell();
    const value = loan[key];
    if (key === "Member photo") {
      const image = document.createElement("img");
      image.src = value;
      cell.appendChild(image);
    } else {
      cell.textContent = value;
    }
  }
});
