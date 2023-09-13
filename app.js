const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const app = express();
const { connect, getDB } = require("./config/mongoConnection");
const IndexController = require("./controllers");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", IndexController.readUsers);
app.get("/users/:id", IndexController.readUserById);
app.post("/users", IndexController.createUser);

connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
});
