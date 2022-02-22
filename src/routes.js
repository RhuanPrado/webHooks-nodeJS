const express = require('express');
const PaymentController = require('./controllers/PaymentController');
const NotificationController = require('./controllers/NotificationController');

const routes = express.Router();

routes.get('/payment', PaymentController.index);
routes.post('/payment', PaymentController.store);

routes.post('webhook-client', NotificationController.store);


module.exports = routes;