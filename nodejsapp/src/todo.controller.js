const Todo = require("./todo.model");
exports.addTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();
    if (savedTodo) {
      res.status(201).send({ message: "success!", data: savedTodo });
    } else {
      res.status(400).send({ message: "failed!", data: savedTodo });
    }
  } catch (e) {
    console.log("Error in Todos", e);
    res.status(500).send({ message: "server error", data: e });
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (todos) {
      res.status(200).send({ message: "success!", data: todos });
    } else {
      res.status(400).send({ message: "failed!", data: todos });
    }
  } catch (e) {
    console.log("Error in Get All Articles", e);
    res.status(500).send({ message: "server error", data: e });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      res.status(200).send({ message: "success!", data: todo });
    } else {
      res.status(400).send({ message: "failed!", data: todo });
    }
  } catch (e) {
    console.log("Error in Get Article By Id", e);
    res.status(500).send({ message: "server error", data: e });
  }
};
