# PR-BLOG-PROJECTS

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>PR Blog Project</title>

<style>

body{
font-family: Arial, Helvetica, sans-serif;
margin:0;
background:#f5f7fb;
color:#333;
}

.container{
width:90%;
max-width:1200px;
margin:auto;
}

header{
text-align:center;
padding:60px 20px;
background:#0f172a;
color:white;
}

header h1{
font-size:40px;
margin-bottom:10px;
}

header p{
font-size:18px;
opacity:.9;
}

.badges img{
margin:5px;
}

.section{
padding:60px 0;
}

.section h2{
text-align:center;
margin-bottom:40px;
font-size:30px;
}

.tech{
display:flex;
justify-content:center;
gap:40px;
flex-wrap:wrap;
}

.tech div{
text-align:center;
}

.tech img{
width:60px;
margin-bottom:10px;
}

.features{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
}

.card{
background:white;
padding:25px;
border-radius:10px;
box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

.preview{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(400px,1fr));
gap:25px;
}

.preview img{
width:100%;
border-radius:10px;
box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

.install{
background:#0f172a;
color:white;
padding:40px;
border-radius:10px;
}

.install pre{
background:black;
padding:15px;
overflow:auto;
}

footer{
text-align:center;
padding:40px;
font-size:14px;
}

</style>

</head>
<body>

<header>

<h1>PR Blog Platform</h1>

<p>
A full stack blogging platform built using Node.js, Express, MongoDB and EJS.
</p>

<div class="badges">

<img src="https://img.shields.io/badge/Node.js-Backend-green">

<img src="https://img.shields.io/badge/Express.js-Framework-black">

<img src="https://img.shields.io/badge/MongoDB-Database-green">

<img src="https://img.shields.io/badge/EJS-Template-orange">

</div>

</header>


<div class="container">

<section class="section">

<h2>About Project</h2>

<p style="text-align:center;max-width:700px;margin:auto">
PR Blog Project is a full stack blog application where users can register, login, create blog posts and upload images. 
The project demonstrates backend development concepts such as authentication, routing, database operations and MVC architecture.
</p>

</section>


<section class="section">

<h2>Tech Stack</h2>

<div class="tech">

<div>
<img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png">
<p>Node.js</p>
</div>

<div>
<img src="https://cdn-icons-png.flaticon.com/512/919/919825.png">
<p>Express.js</p>
</div>

<div>
<img src="https://cdn-icons-png.flaticon.com/512/919/919836.png">
<p>MongoDB</p>
</div>

<div>
<img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png">
<p>JavaScript</p>
</div>

</div>

</section>


<section class="section">

<h2>Features</h2>

<div class="features">

<div class="card">
<h3>User Authentication</h3>
<p>Users can register and login securely.</p>
</div>

<div class="card">
<h3>Create Blog</h3>
<p>Create and publish blog posts easily.</p>
</div>

<div class="card">
<h3>Image Upload</h3>
<p>Upload blog images using Multer middleware.</p>
</div>

<div class="card">
<h3>Dynamic Pages</h3>
<p>Blogs are dynamically rendered using EJS templates.</p>
</div>

</div>

</section>


<section class="section">

<h2>Project Preview</h2>

<div class="preview">

<img src="images/home.png" alt="Home Page">

<img src="images/blog.png" alt="Blog Page">

<img src="images/create-blog.png" alt="Create Blog">

<img src="images/dashboard.png" alt="Dashboard">

</div>

</section>


<section class="section">

<h2>Installation</h2>

<div class="install">

<pre>
git clone https://github.com/Dev-Mjarir08/PR-BLOG-PROJECTS.git

cd PR-BLOG-PROJECTS

npm install

npm start
</pre>

</div>

</section>


</div>


<footer>

<p>
Created by <b>Jarir Multani</b>
</p>

<p>
GitHub : github.com/Dev-Mjarir08
</p>

</footer>

</body>
</html>
