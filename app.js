require("dotenv").config()
const express= require("express")
const mongoose=require("mongoose")
const session=require("express-session")
const db=require("./db")

const app=express()
const PORT= process.env.PORT|| 4000

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(session({
     secret:"Keyboard Cat",
     resave:false,
     saveUninitialized:true,
     cookie:{secure:false}
}))

app.use((req,res,next)=>{
     res.locals.message=req.session.message
     delete req.session.message
     next()
})

app.set("view engine","ejs")

app.use("",require("./routes/routes"))


app.listen(PORT,()=>{
     console.log(`Server Start http://localhost:${PORT}`);
     
})