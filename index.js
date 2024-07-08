import express from "express";
import routes from "./src/routes.js";
import dbConnect from "./src/database/db.js";
import cors from 'cors'

// Criando app
const app = express();
app.use(cors())
app.use(express.json());

app.use(routes);

// Conectando ao banco de dados
dbConnect();

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor está rodando na porta 3000");
});