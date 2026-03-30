const Todo = require("../models/Todo");

// create
exports.createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// read
exports.getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
};

// update
exports.updateTodo = async (req, res) => {
    const updated = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        // { new: true }
        {returnDocument: "after"}
    );
    res.json(updated);
};

//  delete
exports.deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
};