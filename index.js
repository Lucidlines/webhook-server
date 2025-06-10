
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
    const data = JSON.stringify(req.body, null, 2);
    console.log("Webhook received:", data);
    fs.appendFileSync("webhook_log.txt", data + "\n---\n");
    res.status(200).send("Webhook received successfully");
});

app.get("/", (req, res) => {
    res.send("Webhook server is live.");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
