const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/momoBibiUsers');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:  String,
    password: String,
    urls: [{ url: String, date: Date.now }],
    urlsMime: [{ mime: String, date: Date.now }]
});

let User = mongoose.model('User', userSchema);

module.exports = User;