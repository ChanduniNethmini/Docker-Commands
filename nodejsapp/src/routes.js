const router = require("express").Router();
const { addTodo, getAllTodos, getTodoById } = require("./todo.controller");

router.post("/", addTodo);
router.get("/", getAllTodos);
router.get("/:id", getTodoById);

module.exports = router;
