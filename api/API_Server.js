const API_Coudinary = require('./API_Coudinay');

class API_Server {
    async getList(Database, req, res) {
        let originalUrl = req.baseUrl.slice(1);   
        let filter = JSON.parse(req.query.filter); 
        if(filter.title){
            filter.title = new RegExp(filter.title, 'gi');
        }
        let range = req.query.range.match(/\d+/g);
        let lm = range[1] - +range[0] + 1;
        let n = range[0];
        let [key, val] = req.query.sort.match(/\w+/g); 
        let count = await Database.countDocuments(); 
        let value = await `${originalUrl} ${range[0]}-${range[1]}/${count}`; 
        
        await res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': value 
        });

        let data = await Database.find(filter).limit(parseInt(lm)).skip(parseInt(n)).sort({ [key]: val }).select("-article");
        return data;
    }

    async getOne(Database, req, res) {
        let obj = req.params ? req.params : {};
        let data = await Database.findOne(obj);
        return data;
    }

    async create(Database, dataCreate) {
        let data = await new Database(dataCreate);
        await data.save();
        return data;
    }

    async update(Database, req, res) {
        // detele one img
        let { url, oldUrl = "" } = req.body.picture;
        if (url !== oldUrl && oldUrl.length > 0) {
            await API_Coudinary.deleteOne(oldUrl);
            req.body.picture.oldUrl = '';
        }

        // delete many img
        if (req.body.article) {
            let { oldPicture = [] } = req.body.article;
            if (oldPicture.length) {
                await API_Coudinary.deleteMany(oldPicture);
            }
        }
        let id = req.params._id;
        let body = req.body;
        let data = await Database.findOneAndUpdate({ _id: id }, body, { new: true });
        return data;
    }

    async delete(Database, req, res, id) {
        let data = await Database.findOne(req.params || id);

        let imgOne = data._doc.picture.url || '';
        let imgArr = data._doc.article.picture || [];
        if (imgOne) {
            await API_Coudinary.deleteOne(imgOne);
        }
        if (imgArr.length) {
            await API_Coudinary.deleteMany(imgArr);
        }

        await Database.deleteOne(req.params);
        return data;
    }

    async deleteMany(Database, req, res) {
        let arrId = JSON.parse(req.query.filter).id;
        for (let me of arrId) {
            await this.delete(Database, req, null, { _id: me });
        }
        return arrId;
    }
}

module.exports = new API_Server();