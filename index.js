const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.get("/", (req, res, next) => {
    console.log("index");
    res.sendFile(path.join(__dirname, "private", "page", "index.html"));
})
app.get("/index", (req, res, next) => {    
    res.sendFile(path.join(__dirname, "private", "page", "index.html"));
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})
