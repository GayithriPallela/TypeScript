const express = require('express');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Mock Database
let tasks = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Master REST APIs" }
];

// 1. GET - Read all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// 2. POST - Create a new task
app.post('/tasks', (req, res) => {
    const newTask = {
        id: req.body.id != null ? req.body.id : tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// 3. PUT - Update an existing task
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (task) {
        task.title = req.body.title;
        res.json({
            message: "Task updated successfully",
            task: task
        });
    } else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});

// 4. DELETE - Remove a task
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message: `Task ${id} deleted`,
        remainingTasks: tasks
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`REST API Server running at http://localhost:${PORT}`);
});
