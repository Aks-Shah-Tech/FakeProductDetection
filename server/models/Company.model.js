const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const companySchema = new mongoose.Schema({
  CIN: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

companySchema.pre("save", async function (next) {
  if(this.isModified("password")){
      this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

companySchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);       
}

companySchema.methods.generateToken = function() {
  return jwt.sign({_id: this._id}, process.env.JWT_SECRET);
}

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
