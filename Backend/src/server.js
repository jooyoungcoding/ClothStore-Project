const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());

// parse JSON
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("🚀 Express + MongoDB is running");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
