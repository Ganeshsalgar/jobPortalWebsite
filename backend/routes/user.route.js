import express from "express";
import { login, register, updataProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";


const router =  express.Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/Profile/update").post(isAuthenticated ,updataProfile);


export default router