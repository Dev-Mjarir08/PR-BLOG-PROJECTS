import { Router } from "express";
import  userControlPanel from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";
import imageUpload from "../middlewares/imageUpload.js";

const userRouter = Router();

userRouter.get('/login', userControlPanel.loginPage);
userRouter.get('/register',auth, userControlPanel.registerPage);
userRouter.post('/register', userControlPanel.registerData);
userRouter.post('/login', userControlPanel.dataLogin);
userRouter.get('/logout', userControlPanel.dataLogout);
userRouter.get('/create-Blog', userControlPanel.createBlogPage);

userRouter.post("/create-Blog", imageUpload, userControlPanel.createBlog);

userRouter.get("/blogPage/:id" , imageUpload , userControlPanel.viewBlog)
userRouter.get("/editBlog/:id" , imageUpload , userControlPanel.editBlog)
userRouter.get("/delete/:id" , imageUpload , userControlPanel.deleteBlog)
userRouter.post("/updateBlog/:id" , imageUpload , userControlPanel.updateBlog)
userRouter.get("/myBlog" , imageUpload , userControlPanel.myBlog)


export default userRouter;