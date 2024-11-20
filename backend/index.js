require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/task.routes"); 


const app = express();
const PORT = process.env.PORT;
const DB_URI = process.env.MONGO_URI;
// const DB_URI = "mongodb://localhost:27017/task-manager";

mongoose
    .connect(DB_URI)
    .then(() => console.log("DB Connected!"))
    .catch((error) => console.log("Error in connecting DB", error));

app.use(cors());
app.use(express.json());
app.use("/tasks", router);

app.listen(PORT, () => {
    console.log(`Backend listening on Port ${PORT}!`);
});