const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
