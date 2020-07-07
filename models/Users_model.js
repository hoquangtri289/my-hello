const mogoose = require('mongoose');

const UsersSchema = new mogoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String
    },
    address: {
        street: {
            type: String,
            default: 'con duong'
        },
        suite: {
            type: String,
            default: 'ko biet'
        },
        city: {
            type: String,
            default: 'hue'
        },
        zipcode: {
            type: String,
            default: '232124'
        },
        geo: {
            lat: {
                type: String,
                default: '332-5454'
            },
            lng: {
                type: String,
                default: '44212-543534'
            }
        }
    },
    phone: {type: String},
    website: {
        type: String,
        default: 'https://zing.vn'
    },
    company: {
        name: {
            type: String,
            default: 'react-admin'
        },
        catchPhrase: {
            type: String,
            default: '2e343'
        },
        bs: {
            type: String,
            default: 'chua biet'
        }
    } 
});

let Users = mogoose.model('Users', UsersSchema, "Users");

module.exports = Users;