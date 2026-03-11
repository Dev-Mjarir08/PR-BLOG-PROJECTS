<div align="center">

# 📝 PR-BLOG-PROJECT

### 🚀 Full Stack Blog Management Web Application

<p>
A modern blog platform built with <b>Node.js, Express.js, MongoDB, and EJS</b>  
that allows users to create, manage, and publish blogs with image uploads.
</p>

<br/>

<img src="https://img.shields.io/badge/Node.js-18+-green?logo=node.js"/>
<img src="https://img.shields.io/badge/Express.js-Framework-black?logo=express"/>
<img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb"/>
<img src="https://img.shields.io/badge/Mongoose-ODM-red?logo=mongoose"/>
<img src="https://img.shields.io/badge/EJS-Template-yellow?logo=ejs"/>
<img src="https://img.shields.io/badge/Status-Active-success"/>
<img src="https://img.shields.io/badge/License-MIT-blue"/>

<br/>

### 🌐 Live Demo

👉 https://pr-blog-projects.onrender.com

</div>

---

# 📸 Project Preview

<div align="center">

<img src="https://github.com/user-attachments/assets/blog-preview1" width="80%" style="border-radius:12px"/>
<img src="https://github.com/user-attachments/assets/blog-preview2" width="80%" style="border-radius:12px"/>
<img src="https://github.com/user-attachments/assets/blog-preview3" width="80%" style="border-radius:12px"/>
<img src="https://github.com/user-attachments/assets/blog-preview4" width="80%" style="border-radius:12px"/>

</div>

---

# 📌 Project Overview

**PR-BLOG-PROJECT** is a full-stack blog management system where users can:

* Create blog posts
* Upload blog images
* Edit and delete blogs
* View blogs dynamically

The application is built using the **MVC architecture pattern**, ensuring maintainable and scalable code.

---

# 🏗 Architecture

The project follows the **MVC pattern**.

| Layer      | Description                      |
| ---------- | -------------------------------- |
| Model      | MongoDB schema definitions       |
| View       | EJS templates                    |
| Controller | Business logic                   |
| Router     | Application routes               |
| Middleware | File upload & request processing |

---

# 🛠 Tech Stack

| Technology       | Purpose               |
| ---------------- | --------------------- |
| 🟢 Node.js       | Runtime Environment   |
| ⚫ Express.js     | Backend Framework     |
| 🟢 MongoDB       | Database              |
| 🔴 Mongoose      | ODM                   |
| 🟡 EJS           | Template Engine       |
| 📤 Multer        | Image Upload          |
| 🔐 Cookie Parser | Authentication        |
| 🔧 Dotenv        | Environment Variables |

---

# 📁 Project Structure

```
PR-BLOG-PROJECT/
│
├── config/          # Database connection
├── controllers/     # Application logic
├── middlewares/     # Upload & auth middleware
├── models/          # Mongoose schemas
├── routes/          # Express routes
├── public/          # Static assets
├── uploads/         # Uploaded blog images
│
├── views/
│   ├── pages/
│   └── partials/
│
├── index.js
├── package.json
└── .env.example
```

---

# 🎯 Features

✔ User Authentication (Login / Register)
✔ Create Blog Posts
✔ Upload Blog Images
✔ Edit Blog Posts
✔ Delete Blog Posts
✔ View All Blogs
✔ View Single Blog
✔ MongoDB Integration
✔ MVC Architecture
✔ Dynamic EJS Rendering

---

# 🗃 Database Schema

```
{
  title: String,
  content: String,
  excerpt: String,
  image: String,
  tags: [String],
  createdAt: Date
}
```

---

# 🔗 Application Routes

| Method | Route             | Description    |
| ------ | ----------------- | -------------- |
| GET    | `/`               | Home page      |
| GET    | `/login`          | Login page     |
| POST   | `/login`          | Login user     |
| GET    | `/register`       | Register page  |
| POST   | `/register`       | Register user  |
| GET    | `/dashboard`      | User dashboard |
| POST   | `/createBlog`     | Create blog    |
| GET    | `/blogPage/:id`   | View blog      |
| GET    | `/editBlog/:id`   | Edit blog      |
| POST   | `/updateBlog/:id` | Update blog    |
| GET    | `/deleteBlog/:id` | Delete blog    |

---

# ⚙ Installation Guide

## 1️⃣ Clone Repository

```
git clone https://github.com/Dev-Mjarir08/PR-Blog-Project.git
cd PR-Blog-Project
```

---

## 2️⃣ Install Dependencies

```
npm install
```

---

## 3️⃣ Configure Environment Variables

Create `.env` file

```
PORT=8081
MONGO_URL=mongodb://localhost:27017/blogdb
```

---

## 4️⃣ Run Application

Development:

```
npm run dev
```

Production:

```
npm start
```

Server runs at:

```
http://localhost:8081
```

---

# 📦 Available Scripts

```
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

---

# 🚀 Deployment

The project is deployed on **Render**.

Live Link:

https://pr-blog-projects.onrender.com

---

# ✨ Key Highlights

✔ Clean MVC architecture
✔ Organized folder structure
✔ Image upload management
✔ MongoDB database integration
✔ Static assets handling
✔ Production deployment ready

---

# 👨‍💻 Author

**Jarir Multani**

GitHub
https://github.com/Dev-Mjarir08

---

# 📜 License

MIT License
