import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description:{
    type: String,
    require: true
  },
  price: {
    type: Number,
    require:true
  },
  imageUrl:{
    type: String,
    require: true
  },
  inStock: {
    type: Number,
    require:true
  }
});

export default mongoose.model("Product", productSchema)
