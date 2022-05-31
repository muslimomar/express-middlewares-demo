const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.use("/api/auth", require('./routes/auth'));

app.listen(port, () => console.log(`Application running on port ${port}`));

module.exports = app;