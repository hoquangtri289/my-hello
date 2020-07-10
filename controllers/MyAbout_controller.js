const MyAbout_model = require('../models/MyAbout_model');
const API_Server = require('../api/API_Server');

class MyAboutController {
    async getList(req, res){
        let data = await API_Server.getList(MyAbout_model, req, res);
        res.json(data);
    }
    async getOne(req, res) {
        let data = await API_Server.getOne(MyAbout_model, req, res);
        res.json(data);
    }

    async update(req, res){
        let data = await API_Server.update(MyAbout_model, req, res);
        res.json(data);
    }
}

module.exports = new MyAboutController();