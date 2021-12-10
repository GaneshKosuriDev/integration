const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const initializeServer = async () => {
  try {
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
      console.log(`Server is Running at http://localhost:${port}`);
    });
  } catch (e) {
    console.log(`Db error '${e.message}'`);
    process.exit(1);
  }
};

initializeServer();

app.get("/todo", (req, res) => {
  const msg = { text: "Integration is done" };
  res.set("Access-Control-Allow-Origin", "*");
  res.send(msg);
});
