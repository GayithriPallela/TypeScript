
// IMPORTING EXPRESS
const express = require('express');

const app = express();
const PORT = 3000;

// 1. BASIC JSON RESPONSE
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to our API!",
        status: "Active",
        timestamp: new Date()
    });
});

// 2. SENDING AN ARRAY OF OBJECTS
app.get('/students', (req, res) => {
    const studentList = [
        { id: 101, name: "Gayi", course: "MERN Stack" },
        { id: 102, name: "Yogi", course: "Data Science" },
        { id: 103, name: "Balu", course: "UI/UX" }
    ];

    res.json(studentList);
});

// 3. DYNAMIC JSON RESPONSE
app.get('/product/:id', (req, res) => {
    const productId = req.params.id;

    res.json({
        requestedId: productId,
        category: "Electronics",
        inStock: true,
        tags: ["gadget", "new-arrival"]
    });
});

// START SERVER
app.listen(PORT, () => {
    console.log(`JSON Server is running at http://localhost:${PORT}`);
});