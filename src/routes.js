import { Router } from "express";
import {
  getUsers,
  createUser,
  deleteUser,
  editUser,
} from "./Controlers/UserControllers.js";

const routes = Router();
routes.get("/users", getUsers);

routes.post("/users", createUser);

routes.delete("/users/:id", deleteUser);

routes.put("/users/:id", editUser )

export default routes;
