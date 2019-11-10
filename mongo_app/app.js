const express = require('express');
const mongoose = require('mongoose');

var foodRouter = require('./routes/food_routes');

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://user1:<987654321>@cluster0-t11g2.mongodb.net/test?retryWrites=true&w=majority', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
},
() => console.log('connected to db'),
err => console.log("err",err)
);

app.use('/', function(req, res, next){
  console.log('Request Url: ' + req.url);
  next();   //It means run the next middleware.
});

foodRouter(app);

app.listen(3000, () => { console.log('Server is running...') });