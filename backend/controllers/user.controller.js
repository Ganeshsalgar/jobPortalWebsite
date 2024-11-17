import mongoose from "mongoose";
import  { User } from "../models/user.models.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";




export const register = async (req , res) =>{
    try {
        const [fullname , email, phoneNumber , password , role] = req.body;
        if(!fullname || !email || !password || !phoneNumber || !role){
            return res.status(400).json({
                message : "Something is wrong or Missing",
                success : false
            });
        };
        const user = await User.findOne({email});
        if(user ){
            return res.status(400).json({
                message : "User is already exist with this email",
                success: false
            })
        }
        //encrypt the password written the middleware directly here
        const hashedPassword = await bcrypt.hash(password , 10);


        await User.create({
            fullname,
            email ,
            phoneNumber,
            password: hashedPassword,
            role,
        })

        return res.status(201).json({
            message: "Account Created Successfully."
        })
    } catch (error) {
        console.log('User Register is invalid',error)
    }
}


export const login = async (req , res) => {
    try {
            const[email , password , role] = req.body;
            if(!email || !password || !role){
                return res.status(400).json({
                    message : "Something is missing",
                    success : false
                });
            }
            const user = User.findOne({email});
            if(!user){
                return res.status(400).json({
                    message: "Incorrect email or Password",
                    success : false
                })
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if(!isPasswordMatch){
                return res.status(400).json({
                    message: "Incorrect email or Password",
                    success : false
                })
            } 

            // check role is correct or not
            if(role !== user.role){
                return res.status(400).json({
                    message: "Account Doesn't exist with current role",
                    success : false
                })
            }
            
            const tokenData = {
                userId : user._id
            }

            const token  = await jwt.sign(tokenData , process.env.SECRETE_KEY,{expiresIn :'1d'});

            user = {
                _id: user._id,
                fullname : user.fullname,
                email: user.email,
                phoneNumber : user.phoneNumber,
                role: user.role,
                profile: user.profile
            }
            return res.status(200).cookie("token" , token, {maxAge : 1*24*60*60*1000 , httpsOnly: true ,sameSite : 'strict'}).json({
               message : `Welcome back ${user.fullname}`,
               success: true 
            })


    } catch (error) {
        console.log("User login is failed please enter the valid Credientials" , error);
        
    }
} 

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token" , "" , {maxAge:0}).json({
            message: "Logged Out SuccessFully.",
            success: true
        })
    } catch (error) {
        console.log("Logout Error" , error);
        
    }
}

export const updataProfile = async (req, res) => {
    try {
        const {fullname , email , phoneNumber , bio, skills} = req.body;
        const file = res.file;
        if(!fullname || !email || !phoneNumber || !bio || !skills){
            return res.status(400).json({
                message : "Something is Missing",
                success : false
            })
        };

        //cloudinary ayega yaha par

        const skillsArray = skills.split(",");
        const userId = req.id;  ///here we use auth middleware
        const user = await User.findById(userId);

        if(!user){
            return res.status(400).json({
                message : "User not found.",
                success: false
            })
        }
        // updating data 
        user.fullname = fullname,
        user.email = email,
        user.phoneNumber = phoneNumber,
        user.profile.bio = bio,
        user.profile.skills = skillsArray

        // resume comes latar Here........


        await user.save();

        user = {
            _id : user._id,
            fullname : user.fullname,
            email : user.email,
            phoneNumber : user.phoneNumber,
            role : user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message : "Profile Updated Successfully",
            user,
            success : true
        })
    } catch (error) {
        console.log("update profile error >>>>>", error);
        
    }
}













