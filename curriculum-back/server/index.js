const express = require("express");
const routes = require("./api");

require("../db");

const app = express();
const port = 5000;

app.use("/api/v1", routes);

app.get("/", (req, res) => res.send("Hello "));

app.listen(port, () => console.log(`App listen on port ${port}!`));
