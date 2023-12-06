const express = require('express');

const routes = express.Router();

const controller = require('../controller/comment');

routes.post('/postComment',controller.postComment);

routes.get('/getComments',controller.getComments);

routes.get('/deleteComment',controller.deleteComment);

module.exports = routes;

