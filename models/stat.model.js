import mongoose from 'mongoose';

const StatSchema = new mongoose.Schema({
    createCount:{
        type:Number,
        default:0,
    },
    updateCount:{
        type:Number,
        default:0
    }
},{timestamps:true});

export default mongoose.model("stats",StatSchema);