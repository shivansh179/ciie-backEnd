const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  Registration_number: String,
  year: String,
  domain: String,
  status: String,
});

const UserModel = mongoose.model("Members", usersSchema);
module.exports = UserModel;
