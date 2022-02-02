// const express = require('express');
const router = require('express').Router();
const { readDataBase, filter } = require('../helper');
const { query, validationResult } = require('express-validator');

router.get('/tasks',
    query('filterBy')
        .isIn(['', 'done', 'undone'])
        .withMessage('filterBy should include all, done or undone'),
    (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400);
            }

            let todos = readDataBase();

            const params = [
                req.query.filterBy ?? 'all',
                req.query.order ?? 'asc',
                req.query.pp ?? 5,
                req.query.page ?? 1
            ];

            todos = filter(...params);
            res.send(todos)
        }

        catch (e) {
            return res.sendStatus(400);
        }

    })

module.exports = router;
