const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const routes = require("./routes/routes.js")

const PORT = process.env.PORT || 3030;
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use("/", routes);


app.listen(PORT, () => console.log(`Console running in port: ${PORT}`))