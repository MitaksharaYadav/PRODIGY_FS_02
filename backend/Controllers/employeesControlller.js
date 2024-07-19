const pool = require('../db');

const getAllEmployees = async (req, res) => {
  try {
    const allEmployees = await pool.query('SELECT * FROM employees');
    res.json(allEmployees.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await pool.query('SELECT * FROM employees WHERE id = $1', [id]);
    res.json(employee.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const createEmployee = async (req, res) => {
  const { name, position, salary } = req.body;
  try {
    const newEmployee = await pool.query(
      'INSERT INTO employees (name, position, salary) VALUES ($1, $2, $3) RETURNING *',
      [name, position, salary]
    );
    res.json(newEmployee.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, position, salary } = req.body;
  try {
    await pool.query(
      'UPDATE employees SET name = $1, position = $2, salary = $3 WHERE id = $4',
      [name, position, salary, id]
    );
    res.json('Employee updated!');
  } catch (err) {
    console.error(err.message);
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM employees WHERE id = $1', [id]);
    res.json('Employee deleted!');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
