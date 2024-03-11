import mongoose from "mongoose";

// Criando schema (objeto) para requisições
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
});

//exportando schema
export default mongoose.model("User", userSchema);
