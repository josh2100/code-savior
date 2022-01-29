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
    title: "Learn Sorting Algorithms to Ace Your Tech Interview!",
    topic: "js",
    post_url:
      "https://www.youtube.com/watch?v=MWD-iKzR2c8",
    text: "Sorting algorithms are very common in technical interviews. You absolutely need to know them! You also need to be able to explain how they work, not just memorize them.",
    user_id: 2,
  },
  {
    title: "Example Google Tech Interview",
    topic: "js",
    post_url:
      "https://www.youtube.com/watch?v=XKu_SEDAykw",
    text: "This is a worthwhile watch!",
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
    title: `Flexbox Froggy is Fabulous! A Game to Learn Flexbox Interactively.`,
    topic: "css",
    post_url:
      "https://flexboxfroggy.com/",
    text: `Start your flexbox learning adventure here! I learned more from this game than 4 hours hunched over flexbox documentation.`,
    user_id: 5,
  },
  {
    title: `Flex Box Adventure is Another Fun Flexbox Game!`,
    topic: "css",
    post_url:
      "https://codingfantasy.com/games/flexboxadventure",
    text: `I like this game because I can choose my difficulty! This has high replay value! Play it at work as you wait for those co-workers to review your pull request!`,
    user_id: 5,
  },
  {
    title: `CSS Tricks is Both a Resource, and a Place to Get Inspired!`,
    topic: "css",
    post_url:
      "https://css-tricks.com/",
    text: `I start my CSS work day here! This is a lifesaver.`,
    user_id: 4,
  },
  {
    title: `McDonald's Front End Looks Sharp `,
    topic: "css",
    post_url: "https://www.mcdonalds.com",
    text: `Is this a great example of what a sharp front-end looks like, or is Nahom just hungry? We may never know.`,
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
    title: `University of Regina Computer Science has a Free HTML Guide`,
    topic: "html",
    post_url: "https://www.cs.uregina.ca/Links/class-info/215/basic_html/",
    text: `This is a quick overview of how HTML works, and best practices`,
    user_id: 6,
  },
  {
    title: `Understanding the DOM with Freecodecamp`,
    topic: "html",
    post_url: "https://www.freecodecamp.org/news/dom-explained-everything-you-need-to-know-about-the-document-object-model/#:~:text=The%20DOM%20is%20a%20top,the%20DOM%20and%20manipulate%20it.",
    text: `You really need to understand the Document Object Model if you want to ace your technical interview!`,
    user_id: 6,
  },
  {
    title: `HTML for Absolute Beginners`,
    topic: "html",
    post_url: "https://html.com/",
    text: `This is another resource for a high level overview of how to use HTML in your programming career`,
    user_id: 6,
  },
  {
    title: `Free 9 Hour HTML Course from Codecademy`,
    topic: "html",
    post_url: "https://www.codecademy.com/learn/learn-html",
    text: `This course is worth your time! Easy to follow, and Codecademy makes it interactive and fun! These are real HTML exercises, with answers provided if you get stuck.`,
    user_id: 5,
  },


];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
