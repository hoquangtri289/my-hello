const cloudinary = require('cloudinary').v2;

class Coudinary {
    async deleteOne (src){
        let public_id = await src.match(/(?<=\d\/)upload.+?(?=\.)/);
        cloudinary.uploader.destroy(public_id, (err, re) => {
            if(err){
               console.log("xoa one that bai", err);
         } else {
           console.log('xoa one thanh cong', re);
           }
        });
    }

    async deleteMany(srcArr = []){
        let public_id = [];
        for(let url of srcArr){
            url = url.match(/(?<=\d\/)upload.+?(?=\.)/g);
            public_id.push(url[0]);
        }
        await cloudinary.api.delete_resources(public_id, (err, result) => {
            if(err){
                console.log("xoa many img that bai", err);
            } else {
                console.log("xoa many img thanh cong", result);
            }
        })
    }
    async create(src) {
        cloudinary.uploader.upload(src, (e, result) => {
            if(e) {
                console.log('tai len that bai');
            } else {
                console.log('Thanh cong');
            }
        })
    }
}

module.exports = new Coudinary();