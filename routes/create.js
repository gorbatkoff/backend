const { v4 } = require('uuid'); // needs to create uniqal identificator
const router = require('express').Router();
const { readDataBase, writeDataBase } = require('../helper'); // reading data and add new task to data base
const { body, validationResult } = require('express-validator'); // Извлечение данных из запроса
const {todos} = require('../models/index');


router.post('/tasks',
        body('name').isLength({ min: 1 }) // checking length of task's name
        .withMessage("Length should be more then 1 symbol"), // alert error mesage
    async (req, res) => {

        try{
            const errors = validationResult(req); // errors push to error array

            if(!errors.isEmpty()){ // checking errors in Error_Array
                return res.status(400); // if we have one or more errors we return status code 400
            }
            const jane = await todos.create({ // Creating new task
                uuid: v4(), // creating uniqal id
                name: req.body.name, // name of task
                done: req.body.done ?? false, // done or undone
                createdAt: +new Date() // time when task was created
            });

            // let todo = { // Creating new task
            //     uuid: v4(), // creating uniqal id
            //     name: req.body.name, // name of task
            //     done: req.body.done ?? false, // done or undone
            //     createdAt: +new Date() // time when task was created
            // }

            // let todos = readDataBase(); // copy database to variable
            // todos.push(todo); // push new task to array of tasks
            // writeDataBase(todos); // write new array of tasks to database
            res.send("good job"); // send status code 200
        }

        catch (e) {
            res.status(400);
        }

    });

module.exports = router;

// ,
//     query('filterBy')
//     .isIn(['', "done", 'undone'])
//     .withMessage('filterBy should includes "", done or undone')