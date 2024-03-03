const express=require('express');
const router=express.Router();
const {createTodo}=require('../Controllers/createTodo');
const {getTodo}=require('../Controllers/getTodo')
const {getById}=require("../Controllers/getById");
const {updateById}=require("../Controllers/updateById");
const {deleteById}=require("../Controllers/deleteById");

router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getById/:id",getById);
router.put("/updateById/:id",updateById);
router.delete("/deleteById/:id",deleteById);

module.exports=router;