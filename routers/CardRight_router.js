const express = require('express');
const Router = express.Router();

const CardRightController = require('../controllers/CardRight_controller');

Router.get('/', CardRightController.getList);

module.exports = Router;