const router = require('express').Router();
const Event = require('../models/event.model');

router.route('/add').post(async (req, res) => {
    const { eventname, place, organized, date } = req.body;

    try {
        // Create a new instance of the Appoint model with the provided data
        const newEvent = new Event({
            eventname: eventname,
            place: place,
            organized: organized,
            date: date
        });

        // Save the new appointment to the database
        const savedEvent = await newEvent.save();

        // Success: Return the saved appointment data
        res.json({ "status": true, "data": savedEvent });
    } catch (error) {
        // Error: Return the error
        console.error(error);
        res.status(500).json({ "status": false, "data": error.message });
    }
});

router.route('/read').get((req,res) => {
    Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json("errror:" +err));
})

module.exports = router;
