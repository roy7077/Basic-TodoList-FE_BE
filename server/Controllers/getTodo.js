const Todo = require('../Models/todo');

exports.getTodo=async (req,res)=>{
    try{
        const response= await Todo.find({});

        if(!response)
        {
            return res.status(404).
            josn({
                success:true,
                message:`There is no data with id ${id}`
            })
        }

        res.status(200).json(
            {
                success:true,
                data:response,
                Message:"Data Fetched successfully"
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