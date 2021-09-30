--Create a Departments table
CREATE TABLE departments (
    dept_no VARCHAR PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);
--Import CSV
SELECT * FROM departments

--Create Employees table
CREATE TABLE employees (
    emp_no INT PRIMARY KEY,
	emp_title_id VARCHAR,
	birth_date DATE,
    first_name VARCHAR,
	last_name VARCHAR,
	sex VARCHAR,
	hire_date DATE
);
--Import CSV
SELECT * FROM employees

--Create Department Manager table
CREATE TABLE dept_manager (
    dept_no VARCHAR,
    emp_no INT
);
--Import CSV
SELECT * FROM dept_manager

--Create Department Employee table
CREATE TABLE dept_emp (
    emp_no INT,
	dept_no VARCHAR
);
--Import CSV
SELECT * FROM dept_emp

--Create Salaries table
CREATE TABLE salaries (
    emp_no INT,
	salary INT
);
--Import CSV
SELECT * FROM salaries

--Create Titles table
CREATE TABLE titles (
    title_id VARCHAR,
	title VARCHAR
);

--Import CSV
SELECT * FROM titles