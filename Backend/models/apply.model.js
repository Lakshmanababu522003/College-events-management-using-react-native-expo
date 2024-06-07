const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applySchema = new Schema({
    eventName: {
        type: String,
        required: true
    },
    participants: {
        type: Array,
        required: true
    },
    collegeOrDepartment: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Apply = mongoose.model('Apply', applySchema);

module.exports = Apply;
