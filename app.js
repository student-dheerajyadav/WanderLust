const express=require("express");
const app=express();
const mongoose=require("mongoose");
main().then((res)=>{
    console.log("connected to mongoDb dataBase");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    mongoose.connect("mongodb://127.0.0.1.12017//wonderLust");
}

app.get("/",(req,res)=>{
    res.send("connected SuccessFully")
})

app.listen(8080,(req,res)=>{
    console.log("server listening to post 8080");
})