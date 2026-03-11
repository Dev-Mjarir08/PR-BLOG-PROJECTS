import express from 'express';
import envConfig from './config/dotenv.js';
import connectDB from './config/db.js';
import adminrouter from './routes/admin.route.js';
import imageUpload from './middlewares/imageUpload.js';
import userRouter from './routes/user.route.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';



const app = express();
connectDB();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/', adminrouter);
app.use('/user', userRouter);

app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log("http://localhost:" + PORT);
    }
});

