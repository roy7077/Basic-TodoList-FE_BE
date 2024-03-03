const Todo = require('../Models/todo');

exports.createTodo=async (req,res)=>{
    try{
        const {title,description}=req.body;
        //console.log(req.body);
        const response= await Todo.create({title,description});

        res.status(200).json(
            {
                success:true,
                data:response,
                Message:"Entry Created Successfully done"
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