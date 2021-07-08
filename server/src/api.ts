import express from "express";
import { UserController } from "./Routes/userController"

const api = express.Router();

const userController = new UserController();

api.get("/", async (req, res) => {
  res.send("Welcome to the Postgresql & TypeScript example");
});

userController.mount(api)

export default api;
