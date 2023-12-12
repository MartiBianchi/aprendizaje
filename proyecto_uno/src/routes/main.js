const express = require('express')
const router = express.Router()

// Main
const mainController = require('../controllers/main')
router.get('/', mainController.home)

// Users
const usersRouter = require('../controllers/users')
router.use('/users', usersRouter.login)

module.exports = router
