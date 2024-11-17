import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        requried: true
    },
    email:{
        type : String,
        requried : true,
        unique : true
    },
    phoneNumber:{
        type : Number,
        requried : true

    },
    password : {
        type : String,
        requried : true
    },
    role :{
        type : String,
        enum : ['Student' , "Recruiter"],
        requried: true
    },
    profile:{
        bio:{type : String},
        skills : [{type : String }],
        resume : {type : String},   //URL to resume file 
        resumeORiginalName : {type : String},
        company: {type : mongoose.Schema.Types.ObjectId , ref : 'Company'},
        profilePhoto : {
            type : String,
            defaul: ""
        }
    },
   

},
{
    timestamps: true
}) 


export const User = mongoose.model('User', userSchema)