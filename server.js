const express = require("express");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3000;
const app = express();

// Connect to DB
connectDB();

app.get("/", (req, res) => {
  res.send("Success, the API is running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
