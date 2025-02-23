import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotev, { configDotenv } from "dotenv"
import userRoute from './routes/user.route.js';
import connectDB from './utils/db.js';
import companyRouter from './routes/company.route.js';
import jobsRouter from './routes/job.route.js';
import ApplicationRouter from './routes/application.route.js';

const app  = express();

dotev.config({});

// middlerware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

const corsOptions ={
    origin:'http://localhost:5173',
    credentials : true
}
app.use(cors(corsOptions));


const PORT = process.env.PORT ||3000;


// api's 
app.use("/api/v1/user", userRoute);

app.use("/api/v1/company", companyRouter)

app.use("/api/v1/job" , jobsRouter)

app.use("/api/v1/application" , ApplicationRouter)


//https://localhost:8000/api/v1/user/register



app.listen(PORT , () =>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})