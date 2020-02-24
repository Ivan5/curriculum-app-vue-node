const express = require("express");
const routes = require("./api");
const helmet = require("helmet");
const cors = require("cors");

require("../db");

const app = express();
const port = 5000;

//middleware
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use("/api/v1", routes);

app.get("/", (req, res) => res.send("Hello "));

app.listen(port, () => console.log(`App listen on port ${port}!`));
