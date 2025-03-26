const express = require("express");
const requestIp = require("request-ip");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    const ip = requestIp.getClientIp(req);
    res.json({ ip });
});

module.exports = app;
