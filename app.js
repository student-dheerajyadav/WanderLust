const express=require("express");
const app=express();
const mongoose=require("mongoose");
const listing=require("./models/listing.js")
const path=require("path");
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
main().then((res)=>{
    console.log("connected to mongoDb dataBase");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/wonderLust");
}

// app.get("/testListing",async(req,res)=>{
//     let smapleListing=new listing({
//         title:"My new Villa",
//         description:"By the beach",
//         price:1200,
//         loaction:"Calangute,goa",
//         county:"india",
//     });
//    await smapleListing.save();
//    console.log("Sample was saved");
//    res.send("Successfully testing");
// });


//new Routes
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})

//create route
app.post("/listings",async(req,res)=>{
    // let{title,description,image,price,location,country}=req.body;
    const newListing= new listing(req.body.listing);
    await newListing.save();
res.redirect("/listings");
})

//show routes
app.get("/listings/:id",async(req,res)=>{
    let{id}=req.params;
    const list= await listing.findById(id);
    res.render("listings/show.ejs",{list});



})




//index Routes
app.get("/listings",async(req,res)=>{
  const allListings= await listing.find({});
  res.render("listings/index.ejs",{allListings});
       


})


app.get("/",(req,res)=>{
    res.send("connected SuccessFully")
})

app.listen(8080,(req,res)=>{
    console.log("server listening to post 8080");
})