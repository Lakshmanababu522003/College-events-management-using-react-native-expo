const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
const staffRouter = require('./routes/staff')
const eventRouter = require('./routes/event')
const applyRouter = require('./routes/apply')


app.use(express.json());
app.use(cors());

app.use('/users' , userRouter);
app.use('/admin' , adminRouter);
app.use('/apply' , applyRouter);
app.use('/event' , eventRouter);
app.use('/staff' , staffRouter);



mongoose.connect('mongodb://127.0.0.1/emgywc-event1')
  .then(() => {
    console.log('Connected to the database'); 
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

app.listen(4000,() =>{
    console.log('server start');
});