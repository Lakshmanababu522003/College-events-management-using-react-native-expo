const mongoose = require('mongoose');
const schema = mongoose.Schema;


const eventSchema = new schema({
    eventname :{
        type:String,
        required:true,
        minlength:3
    },
    place :{
        type:String,
        required:true,
        minlength:3
    },
    organized :{
        type:String,
        required:true,
        minlength:2
    },
    date:{
        type:Date
    }
},{
        timestamps:true
    
});

const Event = mongoose.model('events',eventSchema);

module.exports = Event;