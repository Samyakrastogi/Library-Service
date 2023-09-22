const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./books.routes");
const app = express();
const db = require("./index");

app.use(bodyParser.json());
app.use(cors());

app.listen(4000, () => console.log("Express Server Started at Port 4000"));
app.use("/libraryService", routes);
