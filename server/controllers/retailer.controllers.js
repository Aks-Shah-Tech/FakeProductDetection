const Retailer = require("../models/Retailer.model.js");
const {
  v4: uuidv4
} = require('uuid');
const {
  sendEmail
} = require("../middlewares/sendEmail");

async function generateRetID() {
  try {
    let id = uuidv4();
    return id.substring(0, 8);
  } catch (error) {
    console.log(error);
    return;
  }
}

async function registerRetailer(req, res) {
  try {
    const company = req.company;
    const {
      name,
      email,
      address
    } = req.body;
    let retId = await generateRetID();

    const existing = await Retailer.findOne({
      email,
      address
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'Retailer Already exists.'
      })
    }

    const newRetailer = new Retailer({
      createdBy: company._id,
      retId,
      name,
      email,
      address,
    });

    const retailer = await newRetailer.save();

    await sendEmail({
      email: retailer.email,
      subject: "Retailer Registration.",
      message: ``,
      html: `<h4>Hi ${name}, You are successfully registered and verified as a retailer.</h4><br>
      <p>Your Retailer Code is <b>"${retId}"</b>, you can view and download your QR code using this Retailer ID.</p>`
    })

    res.status(200).json({
      success: true,
      retailer: newRetailer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getAllRetailer(req, res) {
  try {
    let company = req.company;
    let allRetailers = await Retailer.find({
      createdBy: company._id
    });
    if (!allRetailers) {
      return res.status(404).json({
        success: false,
        message: "No Retailer found"
      });
    }
    return res.status(200).json({
      success: true,
      allRetailers
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function deleteRetailer(req, res) {
  try {
    let {
      retailerId
    } = req.body;
    let retailer = await Retailer.findByIdAndDelete(retailerId);
    if (!retailer) {
      return res.status(400).json({
        success: false,
        message: "Retailer Doesn't Exist"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Deleted Successfully"
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getRetailerById(req, res) {
  try {
    const {
      retailerId
    } = req.body;
    if (!retailerId) {
      return res.status(400).json({
        success: false,
        message: 'Retailer Id not found'
      })
    }
    const retailerDetails = await Retailer.findById(retailerId);
    if (!retailerDetails) {
      return res.status(404).json({
        success: false,
        message: 'No retailer found!'
      })
    }
    return res.status(200).json({
      success: true,
      retailer: retailerDetails
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}


async function QRcodeFromretID(req, res) {
  try {
    const {
      retID
    } = req.body;
    let retDetails = await Retailer.findOne({
      retID
    });
    if (!retDetails) {
      return res.status(404).json({
        success: true,
        message: "No retailer found!.",
      });
    }
    return res.status(200).json({
      success: true,
      uniqueID: retDetails._id,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function verifyRetailer(req, res) {
  try {
    const {
      id
    } = req.params;
    if (id.length != 8) {
      return res.status(400).json({
        success: false,
        message: 'Retailer Not Verified.'
      })
    }
    const retailerDetails = await Retailer.findOne({
      retId: id
    });
    if (!retailerDetails) {
      return res.status(400).json({
        success: false,
        message: 'Retailer Not Verified.'
      })
    }
    return res.status(200).json({
      success: true,
      retailer: retailerDetails
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}



module.exports = {
  registerRetailer,
  QRcodeFromretID,
  getAllRetailer,
  deleteRetailer,
  getRetailerById,
  verifyRetailer
};