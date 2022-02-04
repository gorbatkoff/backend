// const express = require('express');
const router = require('express').Router(); // import routes
const { readDataBase, filter } = require('../helper'); // reading of database
const { query, validationResult } = require('express-validator'); // import express-validotr
const { errorsHandler } = require('../errorsHandler');

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
    (req, res) => {
        try {
            const errors = validationResult(req); // create array of errors

            if (!errors.isEmpty()) {
                return res.status(400).json({ message: errorsHandler(errors) }); // message: "error", "error", "error"
            }

            let todos = readDataBase(); // create array of current tasks

            const params = [ // add params to array of params
                req.query.filterBy ?? 'all',
                req.query.order ?? 'desc',
                req.query.pp,
                req.query.page ?? 1
            ];

            todos = filter(...params); // filter array by params
            res.send(todos) // return array of tasks to front page
        }

        catch (e) {
            return res.sendStatus(400); //if we have some problems return 400
        }

    })

module.exports = router;
