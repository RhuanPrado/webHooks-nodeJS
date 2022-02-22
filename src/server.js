const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('database MONGODB',{
	useNewUrlParser: true,
	useUnifiedTopology: true
});



server.use(morgan("dev"));
server.use(express.json());
server.use(routes);

server.listen(3333);

