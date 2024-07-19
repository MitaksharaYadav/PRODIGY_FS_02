const API_URL = 'http://localhost:3000/employees';

async function fetchEmployees() {
  const response = await axios.get(API_URL);
  const employees = response.data;
  const employeesDiv = document.getElementById('employees');
  employeesDiv.innerHTML = '';

  employees.forEach(employee => {
    const employeeDiv = document.createElement('div');
    employeeDiv.className = 'employee';
    employeeDiv.innerHTML = `
      <p>Name: ${employee.name}</p>
      <p>Position: ${employee.position}</p>
      <p>Salary: ${employee.salary}</p>
      <button onclick="editEmployee(${employee.id})">Edit</button>
      <button onclick="deleteEmployee(${employee.id})">Delete</button>
    `;
    employeesDiv.appendChild(employeeDiv);
  });
}

async function createEmployee() {
  const name = document.getElementById('name').value;
  const position = document.getElementById('position').value;
  const salary = document.getElementById('salary').value;

  await axios.post(API_URL, { name, position, salary });
  fetchEmployees();
}

async function deleteEmployee(id) {
  await axios.delete(`${API_URL}/${id}`);
  fetchEmployees();
}

async function editEmployee(id) {
  const name = prompt('Enter new name:');
  const position = prompt('Enter new position:');
  const salary = prompt('Enter new salary:');

  await axios.put(`${API_URL}/${id}`, { name, position, salary });
  fetchEmployees();
}

fetchEmployees();
