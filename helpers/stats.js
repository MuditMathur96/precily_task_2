import StatsModel from '../models/stat.model';

export const incrementCreate=async()=>{

        let count = await StatsModel.count();
        if(count<=0)
        {
            console.log("no api calls");
            let counter = new StatsModel({
                createCount:1
            });
            return await counter.save();
            
            
        }
        return await StatsModel.findOneAndUpdate({}
            ,{$inc:{
                "createCount":1
        }});


}

export const incrementUpdate=async()=>{
    let count = await StatsModel.count();
        if(count<=0)
        {
            console.log("no api calls");
            let counter = new StatsModel({
                updateCount:1
            });
            return await counter.save();
            
        }
        return await StatsModel.findOneAndUpdate({}
            ,{$inc:{
                "updateCount":1
        }});

}

export const getStats=async()=>{
    let count = await StatsModel.count();
        if(count<=0)
        {
            console.log("no api calls");
            let counter = new StatsModel({
            });
            return await counter.save();
            
        }
        return await StatsModel.findOne({});
}