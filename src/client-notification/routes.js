const express = require('express');

const NotificationController = require('../controllers/NotificationController');

const routes = express.Router();

routes.post('webhook-client', NotificationController.store);


module.exports = routes;