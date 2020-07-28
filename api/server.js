const express = require('express');
const helmet = require('helmet');

const carRouter = require('../cars/car-router.js');
const salesRouter = require('../cars/sales-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carRouter);
server.use('/api/sales', salesRouter);

module.exports = server;
