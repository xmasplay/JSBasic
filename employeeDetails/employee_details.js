const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'HR', salary: 60000 },
      //... More employee records can be added here
    ];

// Function to display all employees
// Function to display all employees

function displayEmployees(){
    //const totalEmployees = employees.map((employee, index) => 
    // `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    
    let totalEmployees = '';

    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        totalEmployees += `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`;
    }

    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    //const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);

    let totalSalaries = 0;
    for (let i = 0; i < employees.length; i++) {
        totalSalaries += employees[i].salary;
    }
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    //const hrEmployees = employees.filter(employee => employee.department === 'HR');

    let hrEmployees = [];
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department === 'HR')
            hrEmployees.push(employees[i]);
    }

    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     
        
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }

 function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }