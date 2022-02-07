const express = require('express')
const PostController = require('../controllers/postController')
const router = express.Router()

router.get('/',PostController.getAllPosts)
router.get('/:user',PostController.getUserPosts)
router.post('/',PostController.createPost)
router.put('/:id',PostController.editPost)
router.delete('/:id',PostController.deletePost)

module.exports = router