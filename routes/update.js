// let {todos} = require('../db.js');
const router = require('express').Router();

router.put('/tasks/:id', (req, res) => {
    const id = req.params.id;

    todos = todos.filter((todo) => todo.id !== id);
    res.sendStatus(200);
});

module.exports = router;