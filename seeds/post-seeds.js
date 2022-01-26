const { Post } = require("../models");

const postData = [
  {
    title: "JavaScript Fundamentals",
    topic: "js",
    post_url: "https://javascript.info/first-steps",
    text: `This is an easy to read guide to JavaScript Fundamentals`,
    user_id: 1,
  },
  {
    title: "Beginners Guide to npm",
    topic: "js",
    post_url:
      "https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/",
    text: `Study up on some npm! Beginner friendly!`,
    user_id: 1,
  },
  {
    title: "Easy Explanation of Types in JavaScript",
    topic: "js",
    post_url:
      "https://jcemer.com/types-in-javascript-what-you-should-care.html",
    text: "Know your data types!",
    user_id: 2,
  },
  {
    title: `Need Some CSS Inspiration? Try CSS Zen Garden`,
    topic: "css",
    post_url: "http://www.csszengarden.com/",
    text: "You can select different layouts from the toolbar on the side.",
    user_id: 3,
  },
  {
    title: `Convert Hex to RGB`,
    topic: "css",
    post_url: "https://www.rapidtables.com/convert/color/hex-to-rgb.html",
    text: "Convert Hex to RGB",
    user_id: 3,
  },
  {
    title: `Bootstrap Cheat Sheet `,
    topic: "css",
    post_url: "https://hackerthemes.com/bootstrap-cheatsheet/",
    text: "Bootstrap Documentation is a Pain. This cheat sheet saved me so much time!",
    user_id: 3,
  },
  {
    title: `A fun history of JavaScript by Codecademy`,
    topic: "js",
    post_url:
      "https://www.codecademy.com/resources/blog/javascript-history-popularity/",
    text: `This was a good, short read`,
    user_id: 4,
  },
  {
    title: `Animated Guide for Flexbox`,
    topic: "css",
    post_url:
      "https://www.freecodecamp.org/news/an-animated-guide-to-flexbox-d280cf6afc35/",
    text: `This is for you visual learners!`,
    user_id: 5,
  },
  {
    title: `McDonald's Front End Looks Sharp `,
    topic: "css",
    post_url: "https://www.mcdonalds.com",
    text: `Nahom needs an excuse to look at burgers.`,
    user_id: 6,
  },
  {
    title: `HTML Cheat Sheet`,
    topic: "html",
    post_url: "https://htmlcheatsheet.com/",
    text: `This site looks a little goofy, but it actually has some very useful tools. You can type in parameters, and it will code a table for you!`,
    user_id: 6,
  },
  {
    title: `HTML Cheat Sheet`,
    topic: "html",
    post_url: "",
    text: ``,
    user_id: 6,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
