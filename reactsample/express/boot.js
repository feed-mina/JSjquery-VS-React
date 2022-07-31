const mongoose = require('mongoose');
const { User } = require('./models');
const hashPassword = require('./utils/hash-password');

mongoose.connect('mongodb://localhost:27017/simple-board');

async function boot() {
  const password = hashPassword("helloelice");
  await User.create({
    email: 'elice@test.com',
    name: 'elice',
    password,
  });
}

boot()
  .then(() => process.exit());
