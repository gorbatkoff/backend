const express = require('express')
const router = require('express').Router()

router.use('/', require('./todos.get'))
router.use('/', require('./todo.post'))
router.use('/', require('./todo.patch'))
router.use('/', require('./todo.delete'))

router.use('/', require('./user.register'))
router.use('/', require('./user.login'))

module.exports = router;