let {todos} = require('../db.js');
const router = require('express').Router();

const {v4} = require('uuid');

router.post('/tasks', (req, res) => {
    const todo = {
        id: v4(), // string
        name: req.body.name,
        done: false,
        createdAt: new Date().toLocaleDateString('ru-ru')
    };
    todos.push(todo);
    res.send(todo);
});

module.exports = router;
