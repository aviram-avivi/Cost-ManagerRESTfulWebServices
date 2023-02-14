// Aviram Avivi 209042316
//Meni Banin 206058612

const mongoose = require('mongoose');

// User schema for the database with id, first_name, last_name, and birthday
const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },

})

const UserModel = mongoose.model('users', userSchema); // User model for the database

module.exports = { UserModel };


//  UserModel.create({
//     id: '123123',
//     first_name: 'moshe',
//     last_name: 'israeli',
//     birthday: new Date('01/10/1990')
// })
