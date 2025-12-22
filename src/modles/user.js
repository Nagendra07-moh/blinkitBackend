import mongoose from 'mongoose'


// Base user schema

const userSchema = new mongoose.Schema({
    name:{type:String},
    type:{
        type : String,
        enum:["Customer","Admin","DeliveryDetails"],
        required:true
    },
    isActivated:{type:Boolean,default:false}
})