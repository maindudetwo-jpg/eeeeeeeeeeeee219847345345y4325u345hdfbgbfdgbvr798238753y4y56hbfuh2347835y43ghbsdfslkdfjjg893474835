const express = require("express");
const path = require("path");
const ping = require("ping");

const app = express();

app.use(express.json());

// Serve index.html when visiting /
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/ping", async (req, res) => {
    const { ip } = req.body;

    try {
        const result = await ping.promise.probe(ip);

        res.json({
            alive: result.alive,
            time: result.time
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});