const express = require("express");
const path = require("path");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "dist/crypto-two")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/crypto-two", "index.html"));
});

app.listen(process.env.PORT || 8080);
