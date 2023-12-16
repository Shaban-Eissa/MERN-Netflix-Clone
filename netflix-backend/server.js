const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"));

app.use("/api/user", userRoutes);
app.get("/google44809cf0d25f012f.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "google44809cf0d25f012f.html"));
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
