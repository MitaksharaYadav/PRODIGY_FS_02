This is a web application that allows administrators to perform CRUD (Create, Read, Update, Delete) operations on employee records. Users can add new employees, view existing employee details, update employee information, and delete employee records.

![Screenshot of Website](screenshot.png)

Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: PostgreSQL
Libraries: Axios, Body-parser
Setup Instructions
Clone the repository:
```bash
git clone https://github.com/your-username/employee-crud-app.git
```

Navigate to the project directory:
```bash
cd employee-crud-app
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the root directory and add your database credentials:
```
DB_USER="your_db_user"
DB_PASSWORD="your_db_password"
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="your_db_name"
PORT="3000"
```

Start the server:
```bash
node server.js
```

Open `index.html` in your browser to view the application.

Features
Add new employee records
View all employee records
Update existing employee records
Delete employee records
Proper validation and authentication mechanisms
