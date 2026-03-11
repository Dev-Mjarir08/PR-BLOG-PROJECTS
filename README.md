<div align="center">

# 📝 PR-BLOG-PROJECT

### 🚀 Full Stack Blog Management Web Application

### 🌐 Live Demo

👉 https://pr-blog-projects.onrender.com

</div>

<p>
A modern blog platform built with <b>Node.js, Express.js, MongoDB, and EJS</b>  
that allows users to create, manage, and publish blogs with image uploads.
</p>

<br/>
<img width="1890" height="977" alt="Screenshot 2026-03-11 114947" src="https://github.com/user-attachments/assets/607bc3b4-1f75-4727-813c-3d8c7a2af74c" />


<img width="1919" height="983" alt="Screenshot 2026-03-11 114957" src="https://github.com/user-attachments/assets/80b6d0bc-fc85-42ab-94f0-44e227ef0268" />

<img width="1894" height="975" alt="Screenshot 2026-03-11 115924" src="https://github.com/user-attachments/assets/0f9963be-0d95-402a-8fb6-e1866816eef2" />

<img width="1894" height="975" alt="Screenshot 2026-03-11 115924" src="https://github.com/user-attachments/assets/e62242a2-e640-4784-8a5a-26b6489d3823" />

<img width="1906" height="976" alt="Screenshot 2026-03-11 115947" src="https://github.com/user-attachments/assets/d4284805-d4c1-4bed-b410-5473061db2ad" />

<br/>



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
