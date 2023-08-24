import express from "express";
import userRouter from "./routes/user.routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
