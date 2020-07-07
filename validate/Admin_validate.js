const jwt = require('jsonwebtoken');

module.exports = {
    validate(req, res, next) {
        let { authorization } = req.headers;
        let { method } = req;
        let arrMethod = ['PUT', 'DELETE', 'POST'];
        if (arrMethod.includes(method)) {
            if (authorization) {
                let token = authorization.split(' ')[1];
                jwt.verify(token, process.env.ACCSEC_TOKEN_SECREC, (err) => {
                    if (err) {
                        res.status(403).json({ error: 'Xac Thuc That Bai' });
                        return;
                    }
                    next();
                    return;
                })
            } else {
                res.status(401).json({ error: 'Xac Thuc That Bai' });
                return;
            }
        } else {
            next();
        }
    }
}