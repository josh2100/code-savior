const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'I think html is falling by the wayside tbh',
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: 'That makes sense but only in Jamaica',
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: 'Letsssssssssss gooooooooooooooooooo',
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: 'boy if that aint the truth',
    user_id: 5,
    post_id: 4,
  },
  {
    comment_text: 'This is really interesting cant wait for the full blog',
    user_id: 4,
    post_id: 5,
  },
  {
    comment_text: 'Hmmm well yes or no. Depends on the company you work for',
    user_id: 6,
    post_id: 2,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;