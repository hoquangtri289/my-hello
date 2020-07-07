const NoiDungBaiViet_Model = require('../models/NoiDungBaiViet_model');
const API_Server = require('../api/API_Server');

class NoiDungBaiVietController {
    async getList(req, res) {
        let data = await API_Server.getList(NoiDungBaiViet_Model, req, res);
        res.json(data);
    }

    async getOne(req, res) {
        let data = await API_Server.getOne(NoiDungBaiViet_Model, req, res);
        res.json(data);
    }

    async update(req, res) {
        let data = await API_Server.update(NoiDungBaiViet_Model, req, res);
        res.json(data);
    }

    async create(req, res) {
        let data = await API_Server.create(NoiDungBaiViet_Model, req.body);
        res.json(data);
    }

    async delete(req, res) {
        let data = await API_Server.delete(NoiDungBaiViet_Model, req, res);
        res.status(200).json(data);
    }

    async deleteMany(req, res) {
        let data = await API_Server.deleteMany(NoiDungBaiViet_Model, req, res);
        res.status(200).json(data);
    }
}

module.exports = new NoiDungBaiVietController();