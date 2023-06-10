const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    keranjang: String,
    userType: String,
  },
  {
    collection: "userInfo",
  }
);

const User = mongoose.model("userInfo", UserDetailsScehma);

module.exports = User;
