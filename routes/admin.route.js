import { Router } from "express";
import  adminPanelController from "../controllers/adminPanel.Controller.js";
import auth from "../middlewares/auth.js";
import imageUpload from "../middlewares/imageUpload.js";

const adminrouter = Router();

adminrouter.get('/', adminPanelController.registerPage);
adminrouter.get('/dashboard', auth, adminPanelController.dashboard);

export default adminrouter;