import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import { MONGODB_URI, PORT } from "./config/config";
import Router from "./routes/route";

const app = express();

app.use(express.json());

const multerMid = multer({
  storage: multer.memoryStorage(),
});

app.use(multerMid.single("file"));

app.get("/", async (req, res) => {
  res.send({
    message: "Hello World",
  });
});


app.use("/api", Router);

app.listen(PORT, async () => {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log(`Server is running at http://localhost:${PORT}`);
    } catch (error: any) {
      console.log(error);
    }
  });


