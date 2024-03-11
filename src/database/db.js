import mongoose from "mongoose";


const dbConnect = () => {
    mongoose
  .connect(
    "mongodb+srv://leonardoberlandadevaloes:41tGRCickRgns2a7@cluster0.ckue3xm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() =>
    console.log("Conexão com o banco de dados estabelecida com sucesso")
  )
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));
}

export default dbConnect