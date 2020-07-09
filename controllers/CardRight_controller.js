const CardRight_Model = require('../models/CardRight_model');
const API_Server = require('../api/API_Server');

class CardRight{
    async getList(req, res) {
        let data = await API_Server.getList(CardRight_Model, req, res);
        res.json(data);
    }
    
    async getOne(req, res) {
        let data = await API_Server.getOne(CardRight_Model, req, res);
        res.json(data);
    }

    async update(req, res) {
        let data = await API_Server.update(CardRight_Model, req, res);
        res.json(data);
    }
    
    async create(req, res) {
        let data = API_Server.create(CardRight_Model, req.body);
        res.json(data);
    }
}

module.exports = new CardRight();