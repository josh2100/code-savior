const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'This is just what I needed!',
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: 'That makes sense, I was struggling',
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: 'Perfect! Fun resource.',
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: 'This is great!',
    user_id: 5,
    post_id: 4,
  },
  {
    comment_text: 'This is really interesting cant wait for the full blog',
    user_id: 4,
    post_id: 5,
  },
  {
    comment_text: 'Thanks for sharing!',
    user_id: 6,
    post_id: 2,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;