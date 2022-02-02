import axios from 'axios';

const api = axios.create({
    baseURL:process.env.Node_ENV==="/"
})


export const getAll = async()=>{
    return await api.get("/thougths/getall");
}

export const create = async(data)=>{
    
    return await api.post("/thougths/",data);
}

export const update = async(id,content)=>{
    console.log("Update Called",id);
    return await api.put("/thougths/"+id,{
        content:content
    });
}

export const getStats = async()=>{
    return await api.get("/stats");
    
}