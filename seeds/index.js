// To Seed, run "node seeds/index.js"
const seedComment = require("./comment-seeds");
const seedPost = require("./post-seeds");
const seedQuestion = require("./question-seeds");
const seedUser = require("./user-seeds");
const seedVote = require('./vote-seeds');

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUser();
  console.log("\n----- USERS SEEDED -----\n");
  await seedPost();
  console.log("\n----- POSTS SEEDED -----\n");
    await seedComment();
  console.log("\n----- COMMENTS SEEDED -----\n");
  await seedQuestion();
  console.log("\n----- QUESTIONS SEEDED -----\n");
  await seedVote();
  console.log("\n----- VOTES SEEDED -----\n");

  process.exit(0);
};

seedAll();
