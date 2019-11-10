const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { UserModel } = require('./models/user');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');

mongoose.connect(
  'mongodb+srv://user1:987654321@cluster0-t11g2.mongodb.net/keepLearning?retryWrites=true&w=majority',
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

app.listen(3000, () => console.log('Server is running on port 3000'));
