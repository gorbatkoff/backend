const express = require('express')
const router = require('express').Router()

router.use('/', require('./read'))
router.use('/', require('./create'))
router.use('/', require('./update'))
router.use('/', require('./delete'))

module.exports = router;