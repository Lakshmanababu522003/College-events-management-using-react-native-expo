const express = require('express');
const router = express.Router();
const FormDataModel = require('../models/apply.model');
const nodemailer = require('nodemailer');

// POST route to store form data in the database
router.post('/add', async (req, res) => {
    try {
        // Extract data from the request body
        const { eventName, participants, collegeOrDepartment, phoneNo, email } = req.body;

        // Check if the email already exists in the database
        const existingEntry = await FormDataModel.findOne({ email });
        if (existingEntry) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'rambabu514352@gmail.com',
                pass: 'jqkp erkk mlxw gzxy'
            },
            secure: true,
            port: 465
        });

        const mailOptions = {
            from: 'rambabu514352@gmail.com',
            to: email,
            subject: 'Subject',
            html: `<h1>Your Registration is Successful</h1>
            <p>Event Name: ${eventName}</p>
            <p>Participants: ${participants}</p>
            <p>College/Department: ${collegeOrDepartment}</p>
            <p>Phone Number: ${phoneNo}</p>
            <p>Email: ${email}</p>`
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        // Create a new document using the FormDataModel schema
        const formData = new FormDataModel({
            eventName,
            participants,
            collegeOrDepartment,
            phoneNo,
            email
        });

        // Save the formData document to the database
        await formData.save();

        // Respond with a success message
        return res.status(201).json({ message: 'Form data stored successfully' });
    } catch (error) {
        console.error(error);
        // Handle any errors
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/applyDetails', async (req, res) => {
    try {
        // Fetch all form data from the database
        const allFormData = await FormDataModel.find();

        // Respond with the retrieved data
        return res.status(200).json(allFormData);
    } catch (error) {
        console.error(error);
        // Handle any errors
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
