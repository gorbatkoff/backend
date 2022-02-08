const router = require('express').Router();
const { body } = require('express-validator'); // Извлечение данных из запроса
const { todos } = require('../models/index');

router.post('/tasks',
    body('name').isLength({ min: 1 }) // checking length of task's name
        .withMessage("Length should be more then 1 symbol"), // alert error mesage
    async (req, res) => {

        try {

            const isTaskAlreadyExist = await todos.findOne({
                where: { name: req.body.name }
            });

            if (isTaskAlreadyExist) {
                res.status(400).json('Task with this name already exist');
            }


            const task = await todos.create({ // Creating new task
                name: req.body.name, // name of task
                done: req.body.done ?? false, // done or undone
            });

            res.send(task);
        }

        catch (e) {
            res.status(400).json({ message: e });
        }

    });

module.exports = router;