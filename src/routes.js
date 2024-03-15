import { Router } from "express";
import {
  getUsers,
  createUser,
  deleteUser,
  editUser,
} from "./Controlers/UserControllers.js";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
  getProductById,
} from "./Controlers/ProductControler.js";

// Users Routes

const routes = Router();
routes.get("/users", getUsers);

routes.post("/users", createUser);

routes.delete("/users/:id", deleteUser);

routes.put("/users/:id", editUser);

//Products Routes

routes.get("/products", getProducts);

routes.get("/products/:id", getProductById);

routes.post("/products", createProduct);

routes.delete("/products/:id", deleteProduct);

routes.put("/products/:id", editProduct);

export default routes;
