const CardRight_Model = require('../models/CardRight_model');
const API_Server = require('../api/API_Server');

class CardRight{
    async getList(req, res) {
        let data = await API_Server.getList(CardRight_Model, req, res);
        res.json(data);
    }
}

module.exports = new CardRight();