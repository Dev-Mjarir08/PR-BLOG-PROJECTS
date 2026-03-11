import User from "../models/user.model.js";
import Blog from "../models/blog.model.js";
import fs from "fs"
import cookieParser from "cookie-parser";

const userControlPanel = {

    async registerPage(req, res) {
        res.render('./pages/register.ejs')
    },
    async loginPage(req, res) {
        res.render('./pages/login.ejs')
    },

    async registerData(req, res) {
        const { username, email, password, confirmPassword } = req.body;

        if (password != confirmPassword) {
            return res.redirect('/');
        }

        try {

            await User.create({
                name: username,
                email,
                password
            });

            return res.redirect('/user/login');

        } catch (error) {
            console.log(error);
            return res.status(500).send("Error");
        }
    },
    async dataLogin(req, res) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });

            if (user) {

                if (user.password == password) {

                    res.cookie("id", user.id);
                    console.log("Cookie set successfully");

                    return res.redirect('/dashboard');

                } else {
                    return res.redirect('/login');
                }

            } else {
                return res.redirect('/login');
            }

        } catch (error) {
            console.log(error);
        }
    },
    async dataLogout(req, res) {
        res.clearCookie("id");
        return res.redirect('/user/login');

    },
    async createBlogPage(req, res) {
        res.render('./pages/createBlog.ejs');
    },

    async createBlog(req, res) {
        try {

            const { title, content, excerpt, tags } = req.body;

            let image = "";

            if (req.file) {
                image = req.file.filename;
            }

            const blog = await Blog.create({
                title,
                content,
                excerpt,
                tags,
                image
            });
            console.log(req.file);
            console.log("BLOG CREATED:", blog);

            return res.redirect("/dashboard");

        } catch (error) {
            console.log(error);
        }
    },
    async viewBlog(req, res) {
        try {

            const blog = await Blog.findById(req.params.id);

            res.render("pages/viewBlog", { blog });

        } catch (error) {
            console.log(error);
        }
    },
    async editBlog(req, res) {
        try {
            const blog = await Blog.findById(req.params.id);
            res.render("pages/editBlog", { blog });
        }
        catch {
            console.log(error);

        }
    },
    async deleteBlog(req, res) {
        try {
            const id = req.params.id;
            const blog = await Blog.findById(id);
            fs.unlinkSync("uploads/" + blog.image);
            await Blog.findByIdAndDelete(id);
            return res.redirect(req.get('Referrer') || '/pages/myBlogs');
        } catch (error) {
            console.log(error.message);
            return res.redirect(req.get('Referrer') || '/pages/myBlogs');
        }
    },
    async updateBlog(req, res) {
        try {

            const id = req.params.id;

            const blog = await Blog.findById(id)
            if(blog.image){
                fs.unlinkSync("uploads/" + blog.image);
            }
            req.body.image = req.file.filename;

            await Blog.findByIdAndUpdate(id, req.body);

            res.redirect("/dashboard");

        } catch (error) {
            console.log(error);
        }
    },
    async myBlog(req, res) {
        try {

            const blogs = await Blog.find();

            res.render("pages/myBlogs", { blogs });

        } catch (error) {
            console.log(error);
        }
    }
}
export default userControlPanel;