const express = require("express");
const cors = require("cors");
const contactRoutes = require("../routes/contactRoutes");
const connectDB = require("../config/db");
const errorHandler = require("../middlewares/errorHandler");
const authRoutes = require("../routes/authRoutes");


const app = express();
connectDB();

app.use(cors());
app.use(express.json());


app.use("/contacts", contactRoutes);
app.use("/api/auth", authRoutes);
app.use(errorHandler);

module.exports = app;


















