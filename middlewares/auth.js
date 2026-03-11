import cookieParser from 'cookie-parser';

const auth = (req, res, next) => {
    const {id} = req.cookies;

    if(id){
        next();
    } else {
       return res.redirect('/user/login');   
    }
}

export default auth;