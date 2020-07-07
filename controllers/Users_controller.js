const API_Server = require('../api/API_Server');
const Users_model = require('../models/Users_model');

class UsersController {
    async getList(req, res){
        let data = await API_Server.getList(Users_model, req, res);
        res.json(data);
    }

    async getOne(req, res){
        let data = await API_Server.getOne(Users_model, req, res);
        res.json(data);
    }

    async create(req, res){
        let data = await API_Server.create(Users_model, req.body);
        res.json(data);
    }
}

module.exports = new UsersController();