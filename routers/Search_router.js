const express = require('express');
const Router = express.Router();

const SearchController = require('../controllers/Search_controller');

Router.get('/', SearchController.getList);

module.exports = Router;