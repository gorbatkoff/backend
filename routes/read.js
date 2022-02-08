// const express = require('express');
const router = require('express').Router(); // import routes
const { readDataBase, filter } = require('../helper'); // reading of database
const { query, validationResult } = require('express-validator'); // import express-validotr
const { errorsHandler } = require('../errorsHandler');

const {todos} = require('../models/index');

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
            if (req.query.filterBy) {
                filterBy = req.query.filterBy;
            }

            const pp = req.query.pp || 5;
            const order = req.query.order || 'desc';
            const page = req.query.page || 1;

            let tasks = await todos.findAndCountAll({
                where: !filterBy ? {} : { done: filterBy },
                order: [['createdAt', order]],
                offset: pp * (page - 1),
                limit: pp,
            });

            // const tasks = await todos.findAll({});
            res.send({ count: tasks.length, todos: tasks });
            // res.send(tasks)
            // console.log(res);


            // console.log(tasks.every(task => task instanceof todos)); 
            // console.log('All tasks: ', JSON.stringify(tasks, null, 2));


            // console.log(todos.every(task => task instanceof))

            // let getTodos = await todos.findAll();   
            // console.log(getTodos.every(task => task instanceof db));
            // console.log(db.findAll());
            // console.log(todos)
            // const errors = validationResult(req); // create array of errors

            // if (!errors.isEmpty()) {
            //     return res.status(400).json({ message: errorsHandler(errors) }); // message: "error", "error", "error"
            // }

            // let todos = readDataBase(); // create array of current tasks

            // const params = [ // add params to array of params
            //     req.query.filterBy ?? 'all',
            //     req.query.order ?? 'desc',
            //     req.query.pp,
            //     req.query.page ?? 1
            // ];

            // todos = filter(...params); // filter array by params
            // res.send(tasks) // return array of tasks to front page
        }

        catch (e) {
            return res.sendStatus(400); //if we have some problems return 400
        }

    })

module.exports = router;
