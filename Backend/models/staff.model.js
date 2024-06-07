const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    email: {
        type: String,
        required: true,
        minlength: 3
    },
    department: {
        type: String,
        required: true,
        minlength: 3
    },
    position: {
        type: String,
        required: true,
        minlength: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
}, {
    timestamps: true
});

const Staffs = mongoose.model('Staffs', staffSchema);

module.exports = Staffs;
