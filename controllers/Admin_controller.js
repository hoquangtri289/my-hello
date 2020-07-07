const { getOne } = require("../api/API_Server");
const Admin_Model = require('../models/Admin');
const jwt = require('jsonwebtoken');

module.exports = {
    async getOne(req, res) {
        let user = req.body;
        let admin = await getOne(Admin_Model, req, res);
        if(user.username !== admin.username || user.password !== admin.password){
            res.status(401).json({error: 'Username || password worng'});
            return;
        }
    
        let token = jwt.sign(JSON.stringify(admin), process.env.ACCSEC_TOKEN_SECREC);
        res.json({ token });
    }
}

// Trang Xác ThựcThực
 