const mongoose = require('mongoose');

const CardRightSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date().toLocaleDateString()
    },
    picture: {
        url: {
            type: String
        },
        alt: {
            type: String
        },
        oldUrl: {
            type: String
        }
    },
    content: {
        type: String
    },
    arcitle: {
        type: Object
    }
})

let CardRight = mongoose.model('CardRight', CardRightSchema, 'CardRight');
module.exports = CardRight;