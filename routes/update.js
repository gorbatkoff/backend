const router = require('express').Router();
const { body, param, validationResult } = require('express-validator');

const { todos } = require('../models/index'); // Importing database from file which filling database
const { Op } = require('sequelize');

router.patch('/tasks/:id',
    param('id').notEmpty().withMessage('ID is empty'),
    body('name').isLength({ min: 1 }).withMessage("New task length is lesser then should be"),
    async (req, res) => {

        try {
            const { name, done } = req.body;

            const isTaskAlreadyExist = await todos.findOne({
                where: { name: req.body.name },
                [Op.not]: { id: req.params.id }
            });

            if (isTaskAlreadyExist) {
                res.send("This task already exist");
                return;
            }

            await todos.update({
                name,
                done
            }, {
                where: {
                    uuid: req.params.id
                }
            });
            res.send(200); // return status 200
        }

        catch (e) {
            return res.sendStatus(400);
        }

    });

module.exports = router;

