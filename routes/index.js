import { Router } from "express";
import adminrouter from "./admin.route.js";
import userRouter from "./user.route.js";
const router = Router();
router.use('/', adminrouter);
router.use('/user', userRouter);

export default router;