const express = require('express');
const Router = express.Router();

const CardRightController = require('../controllers/CardRight_controller');

Router.get('/', CardRightController.getList);
Router.get('/:_id', CardRightController.getOne);
Router.post('/', CardRightController.create);
Router.put('/:_id', CardRightController.update);

module.exports = Router;