const User = require('./users');
const Post = require ('./posts');
const Comment = require ('./comment');


User.hasMany(Post);

Post.belongsToMany(User);

User.hasMany(Comment);

Comment.belongsToMany(User);

Post.hasMany(Comment);

Comment.belongsToMany(Post);

