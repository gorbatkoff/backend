const router = require('express').Router(); // import routes
const { query } = require('express-validator'); // import express-validotr

const { todos } = require('../models/index'); // Importing database from file which filling database

router.get('/tasks', // getting array of tassk
    query('filterBy')
        .isIn(['', 'done', 'undone'])
        .withMessage(
            'query "filterBy" must be in array: ["all", "done", "undone"]'
        ),

    query('order')
        .isIn(['asc', 'desc'])
        .withMessage('query "order" must be in array: ["asc", "desc"]'),

    query('pp').isInt().withMessage('"pp" must be integer'),

    query('page')
        .isInt()
        .withMessage('"page" must be integer')
        .custom((value) => value >= 1)
        .withMessage('"page" cant be 0 '),

    async (req, res) => {
        try {

            let filterBy;
            if (req.query.filterBy) { // If user entered query params for fylterBy then
                filterBy = req.query.filterBy;
            }

            const pp = req.query.pp || 5; // here we assignment to variable query param (Post per page)
            const order = req.query.order || 'desc'; // here we assignment to variable order param. (Sort by ascending or descending)
            const page = req.query.page || 1; // here we setting to page variable new statement (current page)

            let tasks = await todos.findAndCountAll({
                where: filterBy ? { done: filterBy } : {},
                order: [['createdAt', order]], // sql request which assumend 2 params with key and value
                offset: pp * (page - 1),
                limit: pp
            })
            res.send({ count: tasks.length, todos: tasks });
        }

        catch (e) {
            return res.sendStatus(400); //if we have some problems return 400
        }

    })

module.exports = router;
