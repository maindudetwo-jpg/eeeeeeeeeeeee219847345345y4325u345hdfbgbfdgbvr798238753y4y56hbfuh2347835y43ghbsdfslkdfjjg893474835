const express = require("express");
const path = require("path");
const ping = require("ping");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/ping", async (req, res) => {
const { ip } = req.body;

```
console.log("Received ping request for:", ip);

try {
    const result = await ping.promise.probe(ip);

    console.log("Result:", result);

    res.json(result);
} catch (err) {
    console.error("Ping failed:", err);

    res.status(500).json({
        error: err.message
    });
}
```

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log("Server running on port " + port);
});
