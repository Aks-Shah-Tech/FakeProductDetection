const Company = require("../models/Company.model.js");
const {
  sendEmail
} = require('../middlewares/sendEmail.js');
const Admin = require('../models/Admin.model.js');

exports.getAllRequest = async (req, res) => {
  try {
    let approvalList = await Company.find({
      isVerified: false
    });
    if (!approvalList) {
      return res
        .status(404)
        .json({
          success: true,
          message: "No Company found!."
        });
    }
    return res.status(200).json({
      success: true,
      approvalList
    });
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Message"
      });
  }
};

exports.approveRequest = async (req, res) => {
  try {
    let {
      companyId
    } = req.body;
    
    if (!companyId) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Company Id not in request"
        });
    }
    console.log(Company);
    let updatedCompany = await Company.findByIdAndUpdate(companyId, {
      isVerified: true,
    });
    
    if (!updatedCompany) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Unable to Update the Company details"
        });
    }
    //Todo Send the mail to the Company that they are verified now.
    await sendEmail({
      email: updatedCompany.email,
      subject: "Company Registration",
      message: `Your company registration has been approved.`,
    })
    return res
      .status(200)
      .json({
        success: true,
        message: "SuccessFully Verified the Company"
      });
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Message"
      });
  }
};

exports.rejectRequest = async (req, res) => {
  try {
    let {
      companyId
    } = req.body;
    console.log(req.body);
    if (!companyId) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Company Id not in request"
        });
    }
    let companyDetails = await Company.findById(companyId);
    //Todo Send the mail to the Company that they are Rejected now.
    await sendEmail({
      email: companyDetails.email,
      subject: "Company Registration",
      message:`Your company registration has been rejected.`,
    });
    

    let deletedCompany = await Company.findByIdAndDelete(companyId);
    if (!deletedCompany) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Unable the delete the Company"
        });
    }
    return res
      .status(200)
      .json({
        success: true,
        message: "SuccessFully Deleted the Company"
      });
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Message"
      });
  }
};

//Todo Create the Login
// exports.adminLogin = async (req, res) => {};

exports.registerAdmin = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        let admin = await Admin.findOne({
            email
        });
        if (admin) {
            return res.status(400).json({
                success: false,
                message: "Admin already exists"
            });
        }

        admin = await Admin.create({
            email,
            password
        })
        res.status(201).json({
            success: true,
            message: "Admin Registered successfully."
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.loginAdmin = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        const admin = await Admin.findOne({
            email
        });
        if (!admin) {
            return res.status(400).json({
                success: false,
                message: "Admin does not exists"
            });
        }

        const isMatch = await admin.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Credentials"
            });
        }

        const token = await admin.generateToken();

        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true
        }

        res.status(201).cookie("adminToken", token, options).json({
            success: true,
            admin,
            token,
            message: "Login Success"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.logout = async (req, res) => {
    try {
        res
            .status(200)
            .cookie("adminToken", null, {
                expires: new Date(Date.now()),
                httpOnly: true
            })
            .json({
                success: true,
                message: "Logged out",
            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}