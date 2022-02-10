const router = require('express').Router();
const { param } = require('express-validator');

const { todos } = require('../models/index'); // Importing database from file which filling database

router.delete('/tasks/:id', param('id').notEmpty().withMessage("ID params shouldn't be empty"),

    async (req, res) => {

        try {

            // Delete everyone named "Jane"
            await todos.destroy({
                where: {
                    uuid: req.params.id
                }
            });

            res.send("Ok");
        }

        catch (e) {
            return res.sendStatus(400);
        }

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