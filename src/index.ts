import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import connectDB from './db/db'
import errorHandler from "./middleware/errorHandler";
import imageRoutes from './routes/image'
import path = require("path");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use('/src/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/', imageRoutes);

connectDB(process.env.MONGO_URL);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
