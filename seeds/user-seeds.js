const { User } = require('../models');

const userData = [
  {
    username: 'Jeremy',
    email: 'Jeremy@gmail.com',
    password: 'Jeremy01',
  },
  {
    username: 'Sasha',
    email: 'Sasha@gmail.com',
    password: 'Sasha02',
  },
  {
    username: 'Jessie',
    email: 'Jessie@gmail.com',
    password: 'Jessie03',
  },
  {
    username: 'Zander',
    email: 'Zander@gmail.com',
    password: 'Zander04',
  },
  {
    username: 'Lisa',
    email: 'Lisa@gmail.com',
    password: 'Lisa05',
  },
  {
    username: 'Lambony',
    email: 'Lambony@gmail.com',
    password: 'Lambony06',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;