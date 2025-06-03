const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Todo = require('./models/Todo');

app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// HOME 
app.get('/', (req, res) => res.send('Server is working'));

// GET all todos
app.get("/todos", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// GET a single todo
app.get("/todos/:id", async (req, res) => {
    const todo = await Todo.find(req.params.id);
    if (!todo) return res.status(404).json({"error": "Todo not found"});
    res.json(todo);
});


// POST: create a todo
app.post("/todos", async (req, res) => {
    const { title, completed = false } = req.body;
    const todo = new Todo({title, completed});
    await todo.save();
    res.status(201).json(todo);
});

// PUT: update a todo
app.put("/todos/:id", async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true},
    );
    if (!todo) return res.status(404).json({"error": "Todo not found"});
    res.status(200).json({ message: "Todo updated successfully", todo });
});

// DELETE: a todo
app.delete("/todos/:id", async (req, res) => {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({"error": "Todo not found"});
    res.status(200).json({message: 'Todo deleted successfully'});
})