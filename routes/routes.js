const router=require("express").Router();

router.get('/users',(req,res)=>{
     console.log("Route here");
     res.send("All users")
})

module.exports=router