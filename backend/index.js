require("dotenv").config();
const analyzeRoutes = require("./routes/analyzeRoutes");
let PORT = 8080;
const express = require("express");
const cors = require("cors")
const reportRoutes = require("./routes/reportRoutes");

const app = express();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());

app.use(cors())

app.use("/api", analyzeRoutes);

const connectDB = require("./config/db");

connectDB();


app.use("/api", reportRoutes);