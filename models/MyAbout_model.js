const mongoose = require('mongoose');

const MyAboutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "My About",
        min: 1,
        max: 200
    },
    age: {
        type: Number,
        min: 0,
        max: 100,
        default: 31,
        required: true
    },
    phone: {
        type: String,
        default: `0962269289`,
        required: true
    },
    picture: {
        url: {
            type: String,
            required: true,
            default: 'https://znews-photo.zadn.vn/w480/Uploaded/jaegtn/2020_05_30/trump_.jpg'
        },
        alt: String
    },
    address: {
        type: String,
        default: 'Hue'
    },
    facebook: {
        type: String,
        required: true,
        default: 'FaceBook'
    },
    zalo: {
        type: String,
        default: "Zalo"
    },
    email: {
        type: String,
        default: 'hoquangtri289@gmail.com',
        required: true
    }
});

const MyAbout = mongoose.model('MyAbout', MyAboutSchema, 'MyAbout');
module.exports = MyAbout;