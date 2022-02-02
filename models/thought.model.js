import mongoose from 'mongoose';

const ThougthSchema = new mongoose.Schema({
    content:{
        
        type:String,
        required:true,
        trim:true

    }
},{timestamps:true});

export default mongoose.model("thougths",ThougthSchema);