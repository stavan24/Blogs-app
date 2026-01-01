const express = require('express');
const router = express.Router();
const { getBlog, createBlog, deleteBlog } = require('../controllers/blogController');

router.get('/get', getBlog);
router.post('/create', createBlog);
router.delete("/delete", deleteBlog)

module.exports = router;