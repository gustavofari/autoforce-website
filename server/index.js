const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const routes = require("./routes/routes.js")

const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

app.use("/", routes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Console running in port: ${PORT}`))