const mongoose = require('mongoose');

const NoiDungBaiVietSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 56,
        minlength: 10
    },
    picture: {
        url: {
            type: String,
            minlength: 0,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        },
        oldUrl: String
    },
    content: {
        type: String,
        minlength: 0,
        maxlength: 200
    },
    article: {
        type: Object
    }
});

const NoiDungBaiViet = mongoose.model('NoiDungBaiViet', NoiDungBaiVietSchema, 'NoiDungBaiViet');
module.exports = NoiDungBaiViet;
