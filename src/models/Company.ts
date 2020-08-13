import mongoose from "mongoose";

export const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Company = mongoose.model("Company", CompanySchema);

export default Company;
