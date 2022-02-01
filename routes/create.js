const {todos} = require('../db.js');
const router = require('express').Router();

router.post('/tasks', (req, res) => {
    const todo = {
        id: Date.now(),
        name: req.body.name,
        done: req.body.done
    };
    todos.push(todo);
    res.send(todo);
});

module.exports = router;
