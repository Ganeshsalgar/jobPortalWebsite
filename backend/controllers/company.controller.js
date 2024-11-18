import { Company } from "../models/company.models.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "company name is required.",
        success: false,
      });
    }

    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "Company is already exist with this name.",
        success: false,
      });
    }

    company = await Company.create({
      name: companyName,
      userId: req.id,
    });
    console.log("Company :- ", company);

    return res.status(201).json({
      message: "Company register successfully.",
      company,
      success: true,
    });
  } catch (error) {
    console.log("register company error", error);
  }
};

//here get all companies that are register by the user
export const getCompany = async (req, res) => {
  try {
    const userId = req.id; /// logged in user company show only
    const companies = await Company.find({ userId });

    if (!companies) {
      return res.status(404).json({
        message: "Companies are not found",
        success: false,
      });
    }
    return res.status(200).json({
        message : 'Company Date fetch successfully.',
        companies,
        success: true
      })
  } catch (error) {
    console.log("Company is not found.", error);
  }
};
// find only for the speacfic company by the id
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        message: "Company is not found.",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company is Found Successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log("user company is not found", error);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    if (!name) {
      return res.status(400).json({
        message: "Name is requied for company.",
        success: false,
      });
    }

    const file = req.file;
    //cloudinary se ayege

    const updateData = { name, description, website, location };

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if(!company){
        return res.status(404).json({
            message: "company not found at last",
            success : false
        })
    }

    return res.status(200).json({
        message:'Update Company information SuccessFully',
        company,
        success : true
    })
  } catch (error) {
    console.log("update company is failed. ", error);
  }
};
