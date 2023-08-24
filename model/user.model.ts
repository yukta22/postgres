import { log } from "console";
import client from "../db";

interface User {
  id: number;
  username: string;
  email: string;
}

const UserModel = {
  getAll: async (): Promise<User[]> => {
    try {
      const result = await client.query("SELECT * FROM users");
      return result.rows as User[];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getById: async (id: number): Promise<User[]> => {
    try {
      const result = await client.query(`SELECT * FROM users WHERE id = $1`, [
        id,
      ]);
      //   console.log(result);

      return result.rows as User[];
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  create: async (username: string, email: string): Promise<void> => {
    try {
      await client.query(
        "INSERT INTO users (username, email) VALUES ($1, $2)",
        [username, email]
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default UserModel;
