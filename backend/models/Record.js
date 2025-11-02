import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  phone: String,
  address: String,
  quantity: Number,
  dateOfBirth: String,
  productName: String,
  productPrice: String,
  productImage: String,
});

export default mongoose.model("Record", recordSchema);
