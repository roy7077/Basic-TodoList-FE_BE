const Todo = require('../Models/todo');

exports.getById=async (req,res)=>{
    try{
        const id=req.params.id;
        const response= await Todo.findById({_id:id});
        res.status(200).json(
            {
                success:true,
                data:response,
                Message:"Successfully get"
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