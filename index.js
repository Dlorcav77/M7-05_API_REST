import * as dotenv from "dotenv";
dotenv.config;

import express from 'express';
const app = express();

import todoRouter from "./routes/todo.route.js";

app.use(express.json());
app.use('/api', todoRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));