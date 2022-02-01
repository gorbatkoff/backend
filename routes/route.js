const express = require('express')
const router = require('express').Router()

router.use('/', require('./create'))
router.use('/', require('./read'))


// router.use('/', require('./update'))
// router.use('/', require('./delete'))


// router.put('/tasks/:id', (req, res) => { // changing something from array
//     let todos = todos.find((todo) => {
//         return todo.id === +req.params.id;
//     });
//     todos.name = req.body.name;
//     res.sendStatus(200);
// });

// router.delete('/tasks/:id', (req, res) => { // Deleting something from array of tasks or smth else
//     todos = todos.filter((todo) => {
//         return todo.id !== +req.params.id;
//     })
//     res.sendStatus(200);
// })

module.exports = router;