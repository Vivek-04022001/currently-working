// create 5 dummy objects with name properties :Grp; Cust Id; Customer Name; Husband Name; Nominee Name; Co-insurer; Loan Id; Disburse Dt; Product Id; Cycle; Instll; O/S; P.Due;L.Due; T.Due; P.ARR;L.ARR; PAR;Co

const data = [
    {
        Grp: "Group A",
        CustId: 1001,
        CustomerName: "John Smith",
        HusbandName: "Adam Smith",
        NomineeName: "Mary Smith",
        CoInsurer: "ABC Insurance",
        LoanId: "L001",
        DisburseDt: "2022-02-15",
        ProductId: "P001",
        Cycle: 6,
        Instll: 5000,
        O_S: 25000,
        P_Due: "2022-08-15",
        L_Due: "2022-12-15",
        T_Due: "2023-06-15",
        P_ARR: "2022-08-25",
        L_ARR: "2022-12-25",
        PAR: 0,
        Co: "ABC"
      },
      {
        Grp: "Group B",
        CustId: 1002,
        CustomerName: "Jane Doe",
        HusbandName: "John Doe",
        NomineeName: "Mark Doe",
        CoInsurer: "XYZ Insurance",
        LoanId: "L002",
        DisburseDt: "2022-03-01",
        ProductId: "P002",
        Cycle: 12,
        Instll: 8000,
        O_S: 40000,
        P_Due: "2022-09-01",
        L_Due: "2023-03-01",
        T_Due: "2023-09-01",
        P_ARR: "2022-09-15",
        L_ARR: "2023-03-15",
        PAR: 0,
        Co: "XYZ"
      },
      {
        Grp: "Group C",
        CustId: 1003,
        CustomerName: "David Lee",
        HusbandName: "Michael Lee",
        NomineeName: "Sophie Lee",
        CoInsurer: "PQR Insurance",
        LoanId: "L003",
        DisburseDt: "2022-04-01",
        ProductId: "P003",
        Cycle: 18,
        Instll: 10000,
        O_S: 50000,
        P_Due: "2022-10-01",
        L_Due: "2023-04-01",
        T_Due: "2023-10-01",
        P_ARR: "2022-10-15",
        L_ARR: "2023-04-15",
        PAR: 0,
        Co: "PQR"
      },
      {
        Grp: "Group D",
        CustId: 1004,
        CustomerName: "Emily Chen",
        HusbandName: "Jack Chen",
        NomineeName: "Lucas Chen",
        CoInsurer: "LMN Insurance",
        LoanId: "L004",
        DisburseDt: "2022-05-01",
        ProductId: "P004",
        Cycle: 24,
        Instll: 12000,
        O_S: 60000,
        P_Due: "2022-11-01",
        L_Due: "2023-05-01",
        T_Due: "2023-11-01",
        P_ARR: "2022-11-15",
        L_ARR: "2023-05-15",
        PAR: 0,
        Co: "LMN"
      },
    {
        Grp: "Group A",
        CustId: 1001,
        CustomerName: "John Smith",
        HusbandName: "Adam Smith",
        NomineeName: "Mary Smith",
        CoInsurer: "ABC Insurance",
        LoanId: "L001",
        DisburseDt: "2022-02-15",
        ProductId: "P001",
        Cycle: 6,
        Instll: 5000,
        O_S: 25000,
        P_Due: "2022-08-15",
        L_Due: "2022-12-15",
        T_Due: "2023-06-15",
        P_ARR: "2022-08-25",
        L_ARR: "2022-12-25",
        PAR: 0,
        Co: "ABC"
      },
      {
        Grp: "Group B",
        CustId: 1002,
        CustomerName: "Jane Doe",
        HusbandName: "John Doe",
        NomineeName: "Mark Doe",
        CoInsurer: "XYZ Insurance",
        LoanId: "L002",
        DisburseDt: "2022-03-01",
        ProductId: "P002",
        Cycle: 12,
        Instll: 8000,
        O_S: 40000,
        P_Due: "2022-09-01",
        L_Due: "2023-03-01",
        T_Due: "2023-09-01",
        P_ARR: "2022-09-15",
        L_ARR: "2023-03-15",
        PAR: 0,
        Co: "XYZ"
      },
      {
        Grp: "Group C",
        CustId: 1003,
        CustomerName: "David Lee",
        HusbandName: "Michael Lee",
        NomineeName: "Sophie Lee",
        CoInsurer: "PQR Insurance",
        LoanId: "L003",
        DisburseDt: "2022-04-01",
        ProductId: "P003",
        Cycle: 18,
        Instll: 10000,
        O_S: 50000,
        P_Due: "2022-10-01",
        L_Due: "2023-04-01",
        T_Due: "2023-10-01",
        P_ARR: "2022-10-15",
        L_ARR: "2023-04-15",
        PAR: 0,
        Co: "PQR"
      },
      {
        Grp: "Group D",
        CustId: 1004,
        CustomerName: "Emily Chen",
        HusbandName: "Jack Chen",
        NomineeName: "Lucas Chen",
        CoInsurer: "LMN Insurance",
        LoanId: "L004",
        DisburseDt: "2022-05-01",
        ProductId: "P004",
        Cycle: 24,
        Instll: 12000,
        O_S: 60000,
        P_Due: "2022-11-01",
        L_Due: "2023-05-01",
        T_Due: "2023-11-01",
        P_ARR: "2022-11-15",
        L_ARR: "2023-05-15",
        PAR: 0,
        Co: "LMN"
      },
]

// create table head and body
const table = document.getElementById('my-table');
const thead = table.createTHead();
const tbody = table.createTBody();

const headers = ["Grp", "Cust.Id", "Customer Name", "Husband Name", "Nominee Name", "Co Insurer", "Loan Id", "Disburse Dt.", "Product Id", "Cycle", "Instll.", "O/S", "P.DUE", "L.DUE","T.DUE","P.ARR","L.ARR", "PAR", "Co"];

// create table header
const headerRow = thead.insertRow(0);
for(let i=0;i<headers.length;i++){
    const header = document.createElement('th');
    header.innerHTML = headers[i];
    headerRow.appendChild(header);
  
}

// create table body
data.forEach((loan, index)=>{
    const row = tbody.insertRow(index);
    // // 2July 2023
    // row.classList.add('page-break');
    row.classList.add('singleton-row');

    for(const key in loan){
        const cell = row.insertCell();
        const value = loan[key];
        cell.textContent = value;
    }
})

