const express = require('express')
const router = express.Router()

const {
    getControlPanel,
    createPost,
    createPostApi,
    updatePost,
    updatePostApi,
    deletePostApi
} = require('../controllers/adminController')

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {import('express').NextFunction} NextFunction
 */

/**
 * @module adminRoutes
 */

/**
 * Express router to handle admin-related routes.
 * @type {import('express').Router}
 */

/**
 * Route to display the control panel for posts.
 * @name GET/admin
 * @function
 * @memberof module:adminRoutes
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - The next middleware function.
 */

router.get('/', getControlPanel)

/**
 * Route to display the 'Create Post' form.
 * @name GET/admin/createpost
 * @function
 * @memberof module:adminRoutes
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - The next middleware function.
 */

router.get('/createpost', createPost)

/**
 * Route to handle the creation of a new post through an API.
 * @name POST/admin/createpost
 * @function
 * @memberof module:adminRoutes
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - The next middleware function.
 */

router.post('/createpost', createPostApi)

/**
 * Route to display the 'Update Post' form.
 * @name GET/admin/updatepost/:id
 * @function
 * @memberof module:adminRoutes
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - The next middleware function.
 */

router.get('/updatepost/:id', updatePost)

/**
 * Route to handle the update of an existing post through an API.
 * @name POST/admin/updatepost/:id
 * @function
 * @memberof module:adminRoutes
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - The next middleware function.
 */

router.post('/updatepost/:id', updatePostApi)

/**
 * Route to handle the deletion of a post through an API.
 * @name DELETE/admin/deletepost/:id
 * @function
 * @memberof module:adminRoutes
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - The next middleware function.
 */

router.delete('/deletepost/:id', deletePostApi)

module.exports = router
