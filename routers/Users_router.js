const express = require('express');
const Router = express.Router();

const User_controller = require('../controllers/Users_controller');

Router.get('/', User_controller.getList);
Router.get('/:_id', User_controller.getOne);
Router.post('/', User_controller.create);
Router.put('/:_id', (req, res) => {
    console.log("zoo");
})

module.exports = Router;