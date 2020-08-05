const API_Server = require("../api/API_Server");
const CardRight_Model = require("../models/CardRight_model");
const NoiDungBaiViet_Model = require("../models/NoiDungBaiViet_model");

const SearchController = {
    getList: async (req, res) => {
        let noiDung = await API_Server.getList(NoiDungBaiViet_Model, req, res);
        let data = await API_Server.getList(CardRight_Model, req, res);
        res.json([
            { source: "noidungbaiviet", data: noiDung },
            { source: "cardright", data: data },
        ]);
    },
};

module.exports = SearchController;
