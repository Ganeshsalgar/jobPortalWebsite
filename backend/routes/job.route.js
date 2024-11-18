import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { postJob,getAllJobs,getJobById,getAdminJobs } from "../controllers/job.controller.js";



const router = express.Router();




router.route("/post").post(isAuthenticated, postJob);
router.route("/getJobs").get(isAuthenticated, getAllJobs);
router.route("/getAdminJobs").get(isAuthenticated , getAdminJobs);
router.route("/get/:id").get(isAuthenticated,getJobById)

export default router;