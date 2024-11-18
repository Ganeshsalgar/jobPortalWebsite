import { Application } from "../models/application.models.js";
import { Job } from "../models/job.models.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    if (!jobId) {
      return res.status(400).json({
        message: "Job Id is required",
        success: fal,
      });
    }
    //check if the user is already applied for this JOb

    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this Job",
        success: false,
      });
    }
    //check if the jobs exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "The Job is not exist",
        success: false,
      });
    }

    //create a new Application
    const  newApplication = await Application.create({
        job: jobId,
        applicant: userId

    })

    job.applications.push(newApplication._id);
    await job.save();


    return res.status(200).json({
        message:"Job Applied SuccessFully.",
        job,
        success : true
    })
  } catch (error) {
    console.log("Application error", error);
  }
};


export const getAppliedJObs = async (req, res) =>{
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt : -1}).populate({
            path:"job",
            options:{sort:{createdAt : -1}},
            populate:{
                path:"company",
                options:{sort:{createdAt : -1}},
            }
        });

        if(!application){
            return res.status(400).json({
                message:"Application is not found.",
                success: false
            })
        }

        return res.status(200).json({
            message :"Application get SuccessFully.",
            application,
            success : true
        })
    } catch (error) {
        console.log("failed in getappliedjobes" , error);
        
    }
}

// for the admin kiti user ne yaa job la apply kel ahe
export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications",
            options:{sort:{createdAt: -1}},
            populate :({
                path:"applicant",
            })
        });

        if(!job){
            return res.status(404).json({
                message :"Job not found",
                success: false
            })
        }

        return res.status(200).json({
            message:"Applicants are fetched SuccessFully.",
            job,
            success: true
        })
    } catch (error) {
        console.log("get Applicants Error" , error);
        
    }
}


export const updateStatus = async (req, res)=>{
    try {
        const {status}  = req.body;
        const applicationId = req.params.id;
        if(!status){
            return res.status(400).json({
                message :"status is requied",
                success: false
            })
        }

        //find the application by  application Id
        const application = await Application.findOne({_id : applicationId})
        if(!application){
            return res.status(400).json({
                message :"Application is Not found Here.",
                success : false
            })
        }


        //updating a status

        application.status = status.toLowerCase();
        await application.save();


        return res.status(200).json({
            message :"Status Updated SuccessFully",
            application:application.status,
            success :true
        })

    } catch (error) {
        console.log("Update status error", error)
    }
}





