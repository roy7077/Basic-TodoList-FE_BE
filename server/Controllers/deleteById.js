const Todo = require('../Models/todo');

exports.deleteById=async (req,res)=>{
    try{
        const id=req.params.id;
        const response = await Todo.findByIdAndDelete(id);

        res.status(200).json(
            {
                success:true,
                Message:"Deleted Successfully"
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