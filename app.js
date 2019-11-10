const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');

mongoose.connect(
  'mongodb+srv://user1:<987654321>@cluster0-t11g2.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('connected to database!!')
);

app.get('/', (req, res) => {
  return res.render('index');
});

app.post('/person', (req, res) => {
  return res.status(200).json({
    success: true,
    data: req.body
  });
});

app.listen(3000, () => console.log('Server is running on port 3000'));

// const foodRouter = require('./routes/food_routes');

// app.use('/', function(req, res, next) {
//   console.log('Request Url: ' + req.url);
//   next(); //It means run the next middleware.
// });

// foodRouter(app);
