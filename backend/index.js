const express = require("express");
const app = express();

const path = require("path");

const port = 5000;

app.use(express.json());

app.use(express.static(path.resolve(__dirname, "build")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/api", async (req, res) => {
  const { query } = req.query;
  const rawdata = await fetch(
    `https://gnews.io/api/v4/top-headlines?q=${query}&apikey=0882b34381a84633c123e829a0266900`
  );
  const data = await rawdata.json();
  res.send(data);
});
