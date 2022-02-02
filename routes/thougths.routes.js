import express from 'express';
import {create,getAll,update} from  '../controllers/thoughts.controller';
const router = express.Router();

router.get("/",(req,res)=>{
    console.log("Got Request on task api");
    return res.status(200).json({message:"Api under construction"});
})


router.get("/getall",getAll);
router.post("/",create);
router.put("/:id",update)









export default router;