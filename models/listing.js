const mongoose=require("mongoose");
const schema=mongoose.Schema;
const listingSchema=new schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:String,
    price:Number,
    location:String,
    country:String,
})
const Listing=new mongoose.model("Listing",listingSchema);
modules.export=Listing;


