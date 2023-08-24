import express from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
} from "../controller/user.controller";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);

export default userRouter;
