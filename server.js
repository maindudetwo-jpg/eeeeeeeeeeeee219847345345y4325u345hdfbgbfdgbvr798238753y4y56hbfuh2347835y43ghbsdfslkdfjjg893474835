const express = require("express");
const ping = require("ping");

const app = express();

app.use(express.static("public"));
app.use(express.json());

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
app.listen(port);