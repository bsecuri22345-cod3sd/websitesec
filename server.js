const express = require("express");
const path = require("path");

const app = express();

// Serve static frontend files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Azure requires process.env.PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on port " + port);
});
