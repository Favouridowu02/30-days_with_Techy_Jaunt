const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

let todos=[];
let currentId = 1;

// HOME 
app.get('/', (req, res) => res.send('Server is working'));
                                                                                        
// GET all todos
app.get("/todos", (req, res) => {
    res.json(todos);
});

// GET a single todo
app.get("/todos/:id", (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({"error": "Todo not found"});
    res.json(todo);
});


// POST: create a todo
app.post("/todos", (req, res) => {
    const { title, completed = false } = req.body;
    const newTodo = { id: currentId++, title, completed};
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT: update a todo
app.put("/todos/:id", (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({"error": "Todo not found"});
    const {title, completed} = req.body;
    if (title != undefined) todo.title = title;
    if (completed != undefined) todo.completed = completed;

    res.status(200).json(todo);
});

// DELETE: a todo
app.delete("/todos/:id", (req, res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (index < 0) return res.status(404).json({"error": "Todo not found"});
    const deleted = todos.splice(index, 1);
    res.status(200).json(deleted);
    currentId--;
})