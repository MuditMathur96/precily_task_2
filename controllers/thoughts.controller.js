import Thoughts from "../models/thought.model";

export const create = async (req, res) => {
  console.log(req.body);
  try {
    let t = new Thoughts({
      content: req.body.content,
    });
    let result = await t.save();
    return res.status(201).json(t);
  } catch (e) {
    console.lo("Error on created");
    return res.status(403);
  }
};

export const getAll = async (req, res) => {
  try {
      let thougths = await Thoughts.find().sort([["createdAt",-1]]);
      if(!thougths) return res.status(404).json({message:"There are no thougths to show!!"});
      return res.status(200).json(thougths);
  } catch (e) {
      console.log("error while fetching data in getAll method",e);
        res.status(500).json({message:"Server error while fetching data"});
  }
};


export const update = async(req,res)=>{
    
    let {id} = req.params;
    let updatedContent = req.body.content;

    if(!id) return res.status(400).json({message:"Invalid ID parameter"});
    if(!updatedContent) return res.status(400).json({message:"Content is required"});
    let result = await Thoughts.findOneAndUpdate({_id:id},{
      content:updatedContent
    },{
      new:true
    });
    console.log(result);
    return res.status(200).json(result);

}
