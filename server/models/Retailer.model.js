const mongoose = require("mongoose");

const RetailerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  retId: {
    type: String,
    required: true,
    unique: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true
  },
  address: {
    type: String,
    required: true,
    unique:true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
});

const Retailer = mongoose.model("Retailer", RetailerSchema);

module.exports = Retailer;