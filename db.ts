import { Client } from "pg";
const client = new Client({
  user: "root",
  host: "localhost",
  database: "User_database",
  password: "asd",
  port: 5432,
});
client.connect(function (err: any) {
  if (err) throw err;
  console.log("Connected!");
});

export default client;
