const express = require("express");
const path = require("path");

console.log("Starting application...");

let ping;

try {
ping = require("ping");
console.log("Ping module loaded.");
} catch (err) {
console.error("Failed to load ping module:", err);
process.exit(1);
}

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
const file = path.join(__dirname, "index.html");
console.log("Serving:", file);
res.sendFile(file);
});

app.post("/ping", async (req, res) => {
const { ip } = req.body;

```
try {
    console.log(`Pinging ${ip}`);

    const result = await ping.promise.probe(ip);

    console.log(result);

    res.json(result);
} catch (err) {
    console.error("Ping error:", err);

    res.status(500).json({
        error: err.message
    });
}
```

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});
