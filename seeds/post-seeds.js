const { Post } = require('../models');

const postData = [
  {
    title: 'Shut the front door, all things Javascript!',
    topic: 'js',
    text: `Well as for script goes I'm not trying to write much`,
    user_id: 1,
  },
  {
    title: 'Is HTML falling by the wayside?',
    topic: 'html',
    text: 'Step aside html no one needs ya anymore say hello to react :$',
    user_id: 2,
  },
  {
    title: `Love CSS but not sure where the candy is at? Make sense?`,
    topic: 'css',
    text: 'At what point do you start conceding there is real demand here?',
    user_id: 3,
  },
  {
    title: `Don't play to that audience they'll never love ya`,
    topic: 'js',
    text: `At what point do you start conceding Biden memory is totally shot`,
    user_id: 4,
  },
  {
    title: `How peer-peer networks are revolutionizing value exchange`,
    topic: 'html',
    text: `JPMorgan disliked this on twitter`,
    user_id: 5,
  },
  {
    title: `You don't need middlemen to be the middle man`,
    topic: 'css',
    text: `Wrote by the script writers of Malcolm in the middle`,
    user_id: 6,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;