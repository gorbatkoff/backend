const router = require('express').Router();
const { readDataBase, writeDataBase } = require('../helper');
const { body, param, validationResult } = require('express-validator');

router.patch('/tasks/:id',
    param('id').notEmpty().withMessage('ID is empty'),
    body('name').isLength({ min: 1 }).withMessage("New task length is lesser then should be"),
    (req, res) => {

        try{
            const errors = validationResult(req); // add errors to array

            if(!errors.isEmpty()){ // error checking 
                return res.status(400); // if we have errors return response status 400
            }

            const id = req.params.id; // id of task which we want to update
            const todos = readDataBase(); // todos array equals to our dataBase

            // Searching task's index for updating
            const todo = todos.find((todo) => todo.uuid == id); // Searching task
            index = todos.findIndex((todo) => todo.uuid == id); // Searching index

            todo.name = req.body.name ?? todo.name; // Change name of task to new name of task
            todo.done = req.body.done ?? todo.done; // Change state of task to new state of task

            todos.splice(index, 1, todo); // Cutting and pushing new task into array

            writeDataBase(todos); // Writing new array of tasks to dataBase
            res.send(200); // return status 200
        }

        catch(e) {
            return res.sendStatus(400);
        }
        
    });

module.exports = router;

