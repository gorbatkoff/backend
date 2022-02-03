// const express = require('express');
const router = require('express').Router(); // import routes
const { readDataBase, filter } = require('../helper'); // reading of database
const { query, validationResult } = require('express-validator'); // import express-validotr
const { errorsHandler } = require('../errorsHandler');

router.get('/tasks', // getting array of tassk
    query('filterBy') // validator
        .isIn(['', 'done', 'undone']) // validator
        .withMessage('filterBy should include all, done or undone'), //message if we have errpr
    (req, res) => {
        try {
            const errors = validationResult(req); // create array of errors

            if (!errors.isEmpty()) { // if array of errors isn't empty return 400
                return res.status(400).json({ message: errorsHandler(errors) });
            }

            let todos = readDataBase(); // create array of current tasks

            const params = [ // add params to array of params
                req.query.filterBy ?? 'all',
                req.query.order ?? 'asc',
                req.query.pp ?? 5,
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
