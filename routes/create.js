const router = require('express').Router();
const { body } = require('express-validator'); // Извлечение данных из запроса
const { errorsHandler } = require('../errorsHandler');
const { todos } = require('../models/index');

router.post('/tasks',
    body('name').isLength({ min: 1 }) // checking length of task's name
        .withMessage("Length should be more then 1 symbol"), // alert error mesage
        errorsHandler,
    async (req, res) => {

        try {

            if(!req.body.name){
                throw err;
                // return res.sendStatus(400).json('task should not be empty');
            }

            const isTaskAlreadyExist = await todos.findOne({
                where: { name: req.body.name }
            });

            if (isTaskAlreadyExist) {
                throw new Error('this task already exist')
                // throw err;
                // return res.sendStatus(400).json("this task already exist");
            }


            const task = await todos.create({ // Creating new task
                name: req.body.name, // name of task
                done: req.body.done ?? false, // done or undone
            });

            return res.send(task);
        }

        catch (e){
            return res.status(400).json({message: e.message});
        }

    });

module.exports = router;