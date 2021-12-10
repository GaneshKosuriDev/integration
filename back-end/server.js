const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const initializeServer = async () => {
  try {
    app.listen(process.env.PORT || 3005, () => {
      console.log(`Server is Running at http://localhost:3005`);
    });
  } catch (e) {
    console.log(`Db error '${e.message}'`);
    process.exit(1);
  }
};
initializeServer();

app.get("/todo", (req, res) => {
  const msg = { text: "Integration is done" };
  res.send(msg);
});
