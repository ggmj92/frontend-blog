const axios = require('axios')

/**
 * Renders the home page and displays all blog posts.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */
const home = async (req, res) => {
    try {
        const {data} = await axios.get('http://localhost:5001/api/v1/posts')

            res.render('home', {
                posts: data.data,
                user: data.user
            })
        
    } catch (error) {
        console.log(error)
        res.render('404')
        
    }
}

/**
 * Renders a single blog post based on the provided ID.
 *
 * @param {import('express').Request} req - Express request object containing post ID.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */
const getPost = async (req, res) => {

    try {
        const {data} = await axios.get(`http://localhost:5001/api/v1/posts/${req.params.id}`)

            res.render('post', {
                post: data.data
            })
        
    } catch (error) {
        console.log(error)
        res.render('404')
        
    }
}

/**
 * Renders the search blog posts page.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
const searchPost = (req, res) => {
    res.render('searchPost.ejs', { title: 'Search Blog Posts'})
}

/**
 * Renders the create account page.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
const createAccount = (req, res) => {
    res.render('createAccount.ejs', { title: 'Create an account' })
}

/**
 * Renders the log-in page.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
const logIn = (req, res) => {
    res.render('logIn.ejs')
}

/**
 * Renders the contact page.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
const contact = (req, res) => {
    res.render('contact.ejs')
}

/**
 * Handles the API login request and sets a cookie upon successful login.
 *
 * @param {import('express').Request} req - Express request object with user credentials.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */
const apiLogIn = async (req, res) => {
    console.log('apiLogIn', req.body)
    try {
        const response = await axios.post('http://localhost:5001/api/v1/users/login', req.body)
        console.log('login response', response.data)
        res.cookie('token', response.data.token)
        res.redirect('/admin')

    } catch (error) {
        console.log(error)
        
    }
}

/**
 * Handles the API account creation request and sets a cookie upon successful creation.
 *
 * @param {import('express').Request} req - Express request object with user information.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */
const apiCreateAccount = async (req, res) => {
    console.log('api create', req.body)

    try {
        const response = await axios.post('http://localhost:5001/api/v1/users/register', req.body)
        console.log('create account response', response.data)
        res.cookie('token', response.data.token)
        res.redirect('/admin')

    } catch (error) {
        console.log(error)
        
    }
}


module.exports = {
    home,
    getPost,
    searchPost,
    createAccount,
    logIn,
    contact, 
    apiLogIn,
    apiCreateAccount
}