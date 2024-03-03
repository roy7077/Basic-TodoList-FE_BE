const Todo = require('../Models/todo');

exports.updateById=async (req,res)=>{
    try{
        const id=req.params.id;
        const {title,description}=req.body;

        const response = await Todo.updateOne({_id:id},{title,description,updatedAt:Date.now()});

        res.status(200).json(
            {
                success:true,
                Message:"Updated Successfully"
            }
        )
    }
    catch(err)
    {
        console.log(err);
        
        res.status(500)
        .json({
            success:false,
            data:"internal Server error",
            Message:err.message,
        })
    }
}