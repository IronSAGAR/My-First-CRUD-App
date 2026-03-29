# 📌 Spring Boot + React CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) web application built using **Spring Boot (Java)** for the backend and **React.js + Bootstrap** for the frontend.

This project demonstrates how to build and integrate REST APIs with a modern frontend.

---

## 🚀 Tech Stack

### 🔧 Backend

* Java
* Spring Boot
* Spring Web (REST APIs)
* Maven

### 🎨 Frontend

* React.js
* Bootstrap
* Axios / Fetch API

---

## ✨ Features

* ➕ Create new records
* 📄 View all records
* ✏️ Update existing records
* ❌ Delete records
* 🔗 REST API integration between frontend and backend
* 📱 Responsive UI using Bootstrap

---

## 🏗️ Project Structure

```
my-crud-app/
│
├── backend/        # Spring Boot application
│   ├── src/
│   ├── pom.xml
│
├── frontend/       # React application
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── README.md
```

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

```bash
cd backend
mvn spring-boot:run
```

Backend runs on:
👉 http://localhost:8080

---

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:
👉 http://localhost:3000

---

## 🔗 API Endpoints

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| GET    | /users          | Get all items   |
| POST   | /createuser     | Create new item |
| PUT    | /users/{id}     | Update item     |
| DELETE | /users/{id}     | Delete item     |

---

## 🧠 What I Learned

* Building REST APIs using Spring Boot
* Connecting frontend and backend
* Managing state in React
* Handling HTTP requests using Axios/Fetch
* Structuring a full-stack project

---

## 🚧 Future Improvements

* 🔐 Add authentication (JWT)
* ☁️ Deploy on cloud (AWS / Render / Railway)
* 🔎 Add search and pagination
* 🧪 Add unit & integration tests

---

## 👨‍💻 Author

**Sagar Gaikwad**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to fork it!
