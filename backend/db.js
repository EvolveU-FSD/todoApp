const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI);
const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  done: { type: Boolean, default: false },
  dateComplete: { type: Date },
});
const Todos = mongoose.model("Todos", todoSchema);
module.exports = { Todos, mongoose };
