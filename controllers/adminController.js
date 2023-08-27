const  axios = require("axios")

/**
 * Retrieves all blog posts and renders them in the control panel view.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */
const getControlPanel = async (req, res) => {
    try {
        const resp = await axios.get('http://localhost:5001/api/v1/posts/control', {
            headers: {
                Authorization: req.cookies.token
            }
        })

            res.render('admin/allPosts', {
                title: 'Blog Posts',
                posts: resp.data.data,
                user: resp.data.user
            })

    } catch (error) {
        console.log(error)

        res.render('404')

    }
}

/**
 * Renders the form for creating a new blog post.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */
const createPost = async (req, res) => {
    try {

            res.render('admin/newPost', {
                title: 'Create New Post',
            })

    } catch (error) {
        console.log(error)
        res.render('404')

    }
}

/**
 * Sends a new blog post creation request to the API.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */
const createPostApi = async (req, res) => {
    try {
        const newPost = await axios.post('http://localhost:5001/api/v1/posts/', req.body, {
            headers: {
                authorization: req.cookies.token
            }
        })

        res.redirect('/admin')
        
    } catch (error) {
        res.render('404')

    }
}

/**
 * Renders the form for updating a blog post.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */
const updatePost = async (req, res) => {
    try {

        const postId = req.params.id
        const post = await axios.get(`http://localhost:5001/api/v1/posts/${postId}`)

        res.render('admin/editPost', {
            title: 'Edit Post',
            post: post.data.data
        })

    } catch (error) {
        console.log(error)
        res.render('404')

    }
}

/**
 * Sends an update request to the API for a blog post.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */
const updatePostApi = async (req, res) => {
    console.log('update post api', req.body)
    try {
        const updatedPost = await axios.put(`http://localhost:5001/api/v1/posts/${req.params.id}`, req.body, {
            headers: {
                authorization: req.cookies.token
            },
            method: 'put'
        })
        console.log('update post API', updatedPost.data);

        res.redirect('/admin')
        
    } catch (error) {
        res.render('404')

    }
}

/**
 * Deletes a blog post via API request.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */
const deletePostApi = async (req, res) => {
    try {
        const response = await axios.delete(`http://localhost:5001/api/v1/posts/${req.params.id}`, {
            headers: {
                authorization: req.cookies.token
            },
            method: 'delete'
        })
        // req.method = 'GET'

        // res.redirect(303, '/admin')
        res.json({msg: 'Post deleted.'})
        
    } catch (error) {
        res.render('404')

    }
}

module.exports = {
    getControlPanel,
    createPost,
    createPostApi,
    updatePost,
    updatePostApi,
    deletePostApi
}