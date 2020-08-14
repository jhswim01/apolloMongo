import mongoose, { Schema } from "mongoose";
// import User from "./User";

export const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", CompanySchema);

export default Company;
