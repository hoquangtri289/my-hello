const express = require('express');
const Router = express.Router();
const AdminController = require('../controllers/Admin_controller');

Router.get('/login', (req, res) => {
    console.log('/admin/login');
});

Router.post('/login', AdminController.getOne);


module.exports = Router;