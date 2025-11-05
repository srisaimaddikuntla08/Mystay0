import 'dotenv/config'

import express from 'express';
import connectDb from './configs/db.js';
const app = express()
const PORT = process.env.PORT || 5000;
import cors from 'cors'
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js';

connectDb();




//Middleware
app.use(express.json());
app.use(clerkMiddleware());
app.use(cors());

app.use("api/clerk",clerkWebhooks);






app.get("/",(req,res)=>{
    res.send("app is working")
})

app.listen(PORT,()=>console.log(`server running on PORT :${PORT}`))



