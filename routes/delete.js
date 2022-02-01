let {todos} = require('../db.js');
const router = require('express').Router();

router.delete('/tasks/:id', (req, res) => {
    todos = todos.filter((todo) => {
        return todo.id !== req.params.id;
    })
    res.sendStatus(200);
});

module.exports = router;





























// let {todos} = require('../db.js');
// const router = require('express').Router();

// router.put('/tasks/:id', (req, res) => {
//     let todo = todos.find((todo) => {
//         return todo.id === req.params.id;
//     });
//     todo.name = req.body.name;
//     res.sendStatus(200);
// });

// module.exports = router;

// let {todos} = require('../db.js');
// const router = require('express').Router();

// router.delete('/tasks/:id', (req, res) => { // changing something from array

//     todos = todos.filter((todo) => {
//         return todo.id !== req.params.id; // string !== string
//     });
//     res.sendStatus(200);
//     return todos;
// });

// module.exports = router;

// let {todos} = require('../db.js');
// const router = require('express').Router();

// router.delete('/tasks/:id', (req, res) => {
//     todos = todos.filter((todo) => {
//         console.log(req.params.id);
//         return todo.id !== req.params.id;
//     })
//     res.sendStatus(200);
// });

// module.exports = router;