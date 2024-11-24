import { json } from "express";
import { Job } from "../models/job.models.js"

//this fopr post the job by admin
export const postJob = async (req, res)=>{
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Somethin is missing.",
                success: false
            })
        };
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log("posting job error", error);
        
    }
}


//searching jobs for the students 
export const getAllJobs = async (req, res)=>{
    try {
        const keyword = req.query.keyword || "";
        //query for searching a job with title and description
        const query = {
            $or:[
                {title:{$regex: keyword, $options:'i'}},
                {description:{$regex: keyword , $options:'i'}}
            ]
        };

        const jobs = await Job.find(query).populate({
            path:"company"
        }).sort({created_by: -1});
        if(!jobs){
            return res.status(404).json({
                message : "Job is not found",
                success: false
            })
        }

        return res.status(200).json({
            message:"Job Found SucessFully.",
            jobs,
            success: true
        })
    } catch (error) {
        console.log("Job fetching error", error);
        
    }
}

// get the job for the student 
export const getJobById = async(req, res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        });

        if(!job){
            return res.status(404).json({
                message : "Job is not found",
                success :false
            })
        }

        return res.status(200).json({
            message : "Job Found with this Id is SuccessFully.",
            job,
            success : true
        })
    } catch (error) {
        console.log("Job is not found with this Id" , error);
        
    }
}

//this for the how many jobs are created by the admin

export const getAdminJobs = async (req, res) =>{
    try {
        const adminId = req.id;
        const jobs = await Job.find({created_by : adminId}).populate({
            path:'company',
            createAt:-1
        });
        if(!jobs){
            return res.status(400).json({
                message :"jobs are not found woth this id",
                success :false
            })
        } 
        return res.status(200).json({
            message : "Jobs data fetched with this Id",
            jobs,
            success : true
        })
    } catch (error) {
        console.log("Admin job fetching error ", error );
        
    }
}










