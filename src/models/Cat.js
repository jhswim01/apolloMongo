import mongoose from "mongoose";

const CatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const model = mongoose.model("Cat", CatSchema);

export default model;
