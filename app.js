const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { UserModel } = require('./models/user');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('connected to database!!')
);

app.get('/', async (req, res) => {
  const users = await UserModel.find();
  return res.render('index', { users });
});

app.post('/person', async (req, res) => {
  const user = new UserModel({
    firstName: req.body.firstname,
    lastName: req.body.lastname
  });
  await user.save();
  return res.redirect('back');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on port 3000'));
