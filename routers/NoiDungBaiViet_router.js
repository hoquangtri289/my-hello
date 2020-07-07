const express = require('express');
const Router = express.Router();

const NoiDungBaiVietController = require('../controllers/NoiDungBaiViet_controller');

Router.get('/', NoiDungBaiVietController.getList);
Router.get('/:_id', NoiDungBaiVietController.getOne);
Router.put('/:_id', NoiDungBaiVietController.update);
Router.post('/', NoiDungBaiVietController.create);
Router.delete('/:_id', NoiDungBaiVietController.delete);
Router.delete('/', NoiDungBaiVietController.deleteMany);

module.exports = Router;