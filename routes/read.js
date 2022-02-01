let {todos} = require('../db.js');
const router = require('express').Router();

router.get('/tasks', (req, res) => {
    res.send(todos);
})

module.exports = router;