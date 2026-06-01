const express = require("express");
const path = require("path");

console.log("Starting...");

try {
const ping = require("ping");
console.log("Ping module loaded successfully");
} catch (err) {
console.error("Failed to load ping module:", err);
}

const app = express();

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log("Server running on port " + port);
});
