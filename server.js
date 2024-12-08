const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./src/models/User'); // You need to create this model
const app = express();
const cors = require('cors');

app.use(express.json());
// Enable CORS for all origins
app.use(cors());

mongoose.connect('mongodb://localhost:27017/admin')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.post('/signin', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  res.status(201).send({ message: 'User created successfully' });
});

app.get('/signin', (req, res) => {
  res.status(405).send({ message: 'Use POST method for signup' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId: user._id }, 'secret');
  res.send({ token });
});

app.get('/login', (req, res) => {
  res.status(405).send({ message: 'Use POST method for login' });
});

app.get('/profile', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, 'secret');
  const user = await User.findById(decoded.userId);
  res.send(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
