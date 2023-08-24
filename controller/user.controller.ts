import { Request, Response } from "express";
import UserModel from "../model/user.model";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.getAll();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const findUser = await UserModel.getById(id);
    res.status(200).json(findUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email } = req.body;
    await UserModel.create(username, email);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllUsers, createUser, getUserById };
