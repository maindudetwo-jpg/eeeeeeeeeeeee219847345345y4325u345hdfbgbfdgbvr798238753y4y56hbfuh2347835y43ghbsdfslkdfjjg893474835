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
try {
    console.log(`Pinging ${ip}`);

    const result = await ping.promise.probe(ip);

    console.log("Ping result:", result);

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
