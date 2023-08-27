const express = require("express")
const router = express.Router()

const {
    home,
    getPost,
    createAccount,
    logIn,
    contact,
    apiLogIn,
    apiCreateAccount
} = require('../controllers/frontController')

/**
 * Express router to handle front-end routes.
 * @module frontRoutes
 */

/**
 * Route to display the home page.
 * @name GET/
 * @function
 * @memberof module:frontRoutes
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */

router.get('/', home)

/**
 * Route to search and retrieve a post by its ID.
 * @name GET/search/:id
 * @function
 * @memberof module:frontRoutes
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */

router.get('/search/:id', getPost)

/**
 * Route to display the 'Create Account' page.
 * @name GET/createaccount
 * @function
 * @memberof module:frontRoutes
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */

router.get('/createaccount', createAccount)

/**
 * Route to display the 'Log In' page.
 * @name GET/login
 * @function
 * @memberof module:frontRoutes
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */

router.get('/login', logIn)

/**
 * Route to display the 'Contact' page.
 * @name GET/contact
 * @function
 * @memberof module:frontRoutes
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */

router.get('/contact', contact)

/**
 * Route to handle user log in through an API.
 * @name POST/login
 * @function
 * @memberof module:frontRoutes
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */

router.post('/login', apiLogIn)

/**
 * Route to handle user account creation through an API.
 * @name POST/createaccount
 * @function
 * @memberof module:frontRoutes
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */

router.post('/createaccount', apiCreateAccount)

module.exports = router
