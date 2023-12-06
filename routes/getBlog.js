const express = require('express');

const routes = express.Router();

const controller = require('../controller/blog');

routes.post('/postBlog',controller.postBlog);

routes.get('/getBlogs',controller.getBlogs);

routes.get('/getBlogData',controller.getCurrentBlog);

module.exports = routes;