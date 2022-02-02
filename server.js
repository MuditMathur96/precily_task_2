import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from 'cors';

import {port,mongodb} from './config';
import thougthRoutes from './routes/thougths.routes';
import { incrementCreate, incrementUpdate,getStats } from "./helpers/stats";


const app = express();

//Apply Middlewares
app.use(morgan("tiny"));
app.use(express.json({extended:true}));
app.use(cors());
app.use((req,res,next)=>{
    res.on("finish",async()=>{
        if(req.baseUrl==="/thougths")
        {
            switch (req.method)
            {
                case "POST":
                    await incrementCreate();
                    break;

                case "PUT":
                    await incrementUpdate();
                    break;
            }
        }
    });
    next();
})
app.use(express.static('client/build'));

//Configure Routes
app.use("/thougths",thougthRoutes);
app.get("/stats",async(req,res)=>{
    let result = await getStats();
    res.status(200).json(result);
});


//Initialize server with database 
const PORT = port || "3000";
mongoose.connect(mongodb).then(()=>{
    console.log("Database Connected");
    app.listen(PORT,()=>{
        
        console.log("server started at"+PORT);
    })
});
