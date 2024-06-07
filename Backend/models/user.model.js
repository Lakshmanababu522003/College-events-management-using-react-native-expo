const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    studentId: {
        type: String,
        required: true,
        unique: true // Ensure studentId is unique
      },
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    department: {
        type: String,
        required: true,
        minlength: 3
    },
    semester: {
        type: String,
        required: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
}, {
    timestamps: true
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
