const express = require("express");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const app = express();

// Connect to DB
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Success, the API is running.");
});

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
