# 🍃 MongoDB Aggregation Playground

> A comprehensive collection of **50 MongoDB Aggregation Pipeline exercises** built with **Node.js, Express.js, and MongoDB**. This project demonstrates real-world data analysis using MongoDB's powerful Aggregation Framework through practical REST APIs and business scenarios.

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,javascript,vscode,git,github,postman" />
</p>

---

# 📌 Project Overview

MongoDB Aggregation Playground is a backend project designed to master the **MongoDB Aggregation Framework** through practical examples.

Instead of learning aggregation operators individually, this project demonstrates how they are combined to solve real business problems like employee analytics, department reports, salary analysis, project tracking, and dashboard generation.

This project contains **50+ practical aggregation queries** commonly asked in interviews and frequently used in enterprise applications.

---

# 🎯 Why This Project?

Imagine a company with hundreds of employees working across multiple departments.

Management wants answers such as:

- Which department has the highest salary expense?
- Which employees are working on multiple projects?
- What is the average salary of each department?
- Which skills are most common?
- How many projects are currently running?
- Which department is performing the best?

Instead of writing complex loops in application code, MongoDB Aggregation performs all these calculations directly in the database, making applications much faster and more efficient.

---

# ✨ Features

## 👨‍💼 Employee Management

- Create Employee
- Update Employee
- Delete Employee
- View Employee Details

---

## 📊 MongoDB Aggregation Practice

This project demonstrates:

- Employee Filtering
- Department Reports
- Salary Analytics
- Project Analytics
- Skill Analysis
- Random Data Generation
- Dashboard Reports

---

# 🛠 Technologies Used

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### API Testing

- Postman

### Development Tools

- Git
- GitHub
- VS Code

---

# 📂 Project Structure

```text
MongoDBAggregationPlayground
│
├── app
│   ├── config
│   │   └── db.js
│   │
│   ├── controller
│   │   ├── aggregation.controller.js
│   │   └── emp.controller.js
│   │
│   ├── middleware
│   │
│   ├── model
│   │   └── emp.db.js
│   │
│   ├── routes
│   │   ├── aggregation.routes.js
│   │   └── emp.routes.js
│   │
│   └── utils
│       └── httpStatusCode.js
│
├── public
├── uploads
├── views
│
├── app.js
├── package.json
└── .env
```

---

# 📁 Folder Explanation

### 📂 config

Contains MongoDB database configuration.

---

### 📂 controller

Contains employee CRUD operations and all aggregation pipeline logic.

---

### 📂 model

Defines the Employee Schema.

---

### 📂 routes

Contains all API routes for employee management and aggregation.

---

### 📂 middleware

Application middleware.

---

### 📂 utils

Reusable helper functions.

---

# 🗃 Employee Dataset

Each employee document contains

```json
{
  "_id": 1,
  "name": "Raju",
  "department": "IT",
  "salary": 50000,
  "age": 25,
  "skills": ["Node.js", "MongoDB", "Express"],
  "address": {
    "city": "Kolkata",
    "state": "West Bengal"
  },
  "projects": [
    {
      "name": "E-Commerce",
      "status": "Completed",
      "budget": 100000
    }
  ]
}
```

---

# 📚 Aggregation Topics Covered

## ✅ $match

Filter documents based on conditions.

Examples

- Employees from IT department
- Salary greater than ₹50,000
- Employees older than 28
- Employees from Kolkata

---

## ✅ $project

Select specific fields.

Examples

- Display Name
- Display Salary
- Display City
- Display Department

---

## ✅ $group

Generate reports.

Examples

- Department-wise Salary
- Average Salary
- Employee Count
- Project Budget
- Average Age

---

## ✅ $sort

Sort data.

Examples

- Salary Ascending
- Salary Descending
- City Name
- Department + Salary

---

## ✅ $limit

Limit output.

Examples

- First 3 Employees
- Top Salaries

---

## ✅ $skip

Pagination examples.

Examples

- Skip first records
- Page 2
- Page 3

---

## ✅ $unwind

Work with arrays.

Examples

- Projects
- Skills

---

## ✅ $addFields

Generate calculated fields.

Examples

- Bonus
- Total Projects
- Salary Category

---

## ✅ $sample

Random data generation.

Examples

- Random Employees
- Random Department Members

---

# 📋 Practice Questions

| Category | Questions |
|-----------|-----------:|
| Basic Aggregation | 10 |
| Group Operations | 10 |
| Embedded Documents | 10 |
| Arrays & Embedded Arrays | 10 |
| Advanced Aggregation | 10 |

### ✅ Total Questions Solved: **50**

---

# 🌐 API Modules

## Employee APIs

- Create Employee
- Get Employees
- Get Employee By ID
- Update Employee
- Delete Employee

---

## Aggregation APIs

- Match Queries
- Project Queries
- Group Queries
- Sort Queries
- Limit Queries
- Skip Queries
- Unwind Queries
- AddFields Queries
- Sample Queries
- Advanced Queries

---

# 📈 Skills Demonstrated

- MongoDB Aggregation Framework
- REST API Development
- CRUD Operations
- MVC Architecture
- Express.js Routing
- Data Filtering
- Data Transformation
- Business Reports
- Dashboard Analytics
- Embedded Documents
- Embedded Arrays
- Aggregation Pipeline Design

---

# 🎓 Learning Outcomes

By building this project, I gained hands-on experience with:

- MongoDB Aggregation Framework
- Data Analysis
- Department Reports
- Salary Analytics
- Array Operations
- Embedded Documents
- Dashboard Generation
- Enterprise Backend Development
- Express.js
- Mongoose
- REST APIs

---

# 🚀 Future Improvements

- JWT Authentication
- Role-Based Access Control (RBAC)
- Pagination APIs
- Search & Filtering
- Swagger Documentation
- Dashboard UI
- Export Reports (PDF / Excel)
- Docker Deployment

---

# ▶ Installation

Clone Repository

```bash
git clone https://github.com/your-username/mongodb-aggregation-playground.git
```

Install Dependencies

```bash
npm install
```

Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

Run Server

```bash
npm run dev
```

---

# 💼 Skills for Resume

This project demonstrates practical knowledge of:

- MongoDB Aggregation Pipeline
- MongoDB Data Modeling
- Express.js
- Node.js
- Mongoose
- REST APIs
- CRUD Operations
- Backend Development
- Business Analytics
- Dashboard Reporting

---

# 👨‍💻 Author

## Srinu

**Backend Developer**

### Tech Stack

Node.js • Express.js • MongoDB • JavaScript • REST APIs

---

## ⭐ Support

If you found this project useful or learned something from it, consider giving it a **⭐ Star** on GitHub.

It helps others discover the project and motivates me to build more open-source applications.
