require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');

const MONGOOSE_URI = process.env.MONGOOSE_URI || '';
mongoose.connect(MONGOOSE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// Trang nhap khau thanh phan
const Admin_router = require('./routers/Admin_router');
const Users = require('./models/Users_model');
const Users_router = require('./routers/Users_router');
const MyAbout_router = require('./routers/MyAbout_router');
const NoiDungBaiViet_router = require('./routers/NoiDungBaiViet_router');

// Xac Thuc Voi JWT
const {validate} = require('./validate/Admin_validate');

// Ket noi voi databasedatabase
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('ket noi thanh cong');
});

app.use(express.json());
app.use(cors());


// Trang Admin
app.use('/admin', Admin_router);

// Trang Users
app.use('/users', Users_router);

// Trang MyAbout
app.use('/myabout', validate, MyAbout_router);

// Trang NoiDungBaiViet
app.use('/noidungbaiviet',validate, NoiDungBaiViet_router);


app.listen(5000, () => {
  console.log('server on run');
})