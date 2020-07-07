const express = require('express');
const Router = express.Router();

const MyAboutController = require('../controllers/MyAbout_controller');

Router.get('/', MyAboutController.getList);
Router.get('/:_id', MyAboutController.getOne);
Router.put('/:_id', MyAboutController.update);

module.exports = Router;
