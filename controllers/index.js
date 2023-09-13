const { getDB } = require("../config/mongoConnection");
const { ObjectId } = require("mongodb");
const Users = require("../models/Users");
class IndexController {
  static collection() {
    return getDB().collection("users");
  }
  static async createUser(req, res) {
    try {
      const newUser = {
        name: req.body.name,
        hobby: req.body.hobby,
      };
      const user = await Users.create(newUser);
      res.status(201).json({ message: user });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async readUsers(req, res) {
    try {
      const users = await Users.findAll();
      res.status(200).json({ message: users });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async readUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await Users.findByPk(id);
      res.status(200).json({ message: user });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = IndexController;
