import Blog from "../models/blog.model.js";

const adminPanelController = {
    async registerPage(req, res) {
        res.render('./pages/register.ejs')
    },

    async dashboard(req, res) {
        try {
            
            const blogs = await Blog.find().sort({ createdAt: -1 });

            res.render("index", { blogs });

        } catch (error) {
            console.log(error);
        }
    },

};

export default adminPanelController;