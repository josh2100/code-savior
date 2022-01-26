const { Question } = require("../models");

const questionData = [
  {
    topic: "js",
    title: "What does JSON stand for?",
    answer1: "JavaScript Sequential Oriented Notation",
    answer2: "JavaScript Object Notation",
    answer3: "Java Sequence Oriented Notation",
    answer4: "Java Software Object Notation",
    correctAnswer: "answer2",
  },
  {
    topic: "js",
    title: "Select the nullish coalescing operator operator",
    answer1: "??",
    answer2: "&&",
    answer3: "||",
    answer4: "==",
    correctAnswer: "answer3",
  },
  {
    topic: "js",
    title: "Which of the following is an example of a template literal?",
    answer1: "console.log('do JavaScript quizzes' + num + ' times a day')",
    answer2: "alert('use leetcode' + num+ ' times a week')",
    answer3: "console.log(`My grandma ${name} still uses Internet Explorer`)",
    answer4:
      "window.alert(`My grandma` ${name} `still uses Internet Explorer`)",
    correctAnswer: "answer3",
  },
  {
    topic: "js",
    title: "Select the or operator",
    answer1: "??",
    answer2: "&&",
    answer3: "||",
    answer4: "==",
    correctAnswer: "answer3",
  },
  {
    topic: "js",
    title: "Which of the following is an example of an array?",
    answer1: "let animals = ['Lions', 'Tigers', 'Bears]",
    answer2: "let animals = {'Lions', 'Tigers', 'Bears]}",
    answer3: "let animals = <'Lions', 'Tigers', 'Bears>",
    answer4: "let animals = {animals: 'Lions'}",
    correctAnswer: "answer1",
  },
  {
    topic: "js",
    title: "Select the one that is NOT a comparison operator",
    answer1: "!=",
    answer2: "===",
    answer3: "==",
    answer4: "=",
    correctAnswer: "answer4",
  },
  {
    topic: "js",
    title: "Select an example of camel case",
    answer1: "HIGH_SCORES",
    answer2: "high_scores",
    answer3: "high-scores",
    answer4: "highScores",
    correctAnswer: "answer4",
  },
  {
    topic: "js",
    title: "Which of the following is NOT a Javascript data type?",
    answer1: "Undefined",
    answer2: "String",
    answer3: "Null",
    answer4: "console.log()",
    correctAnswer: "answer4",
  },
  {
    topic: "js",
    title: "Which of the following is an example of a primitive type?",
    answer1: "Boolean",
    answer2: "Object",
    answer3: "Function",
    answer4: "Method",
    correctAnswer: "answer1",
  },
  {
    topic: "js",
    title: "The method alert() is built into what object?",
    answer1: "Window",
    answer2: "Error",
    answer3: "Map",
    answer4: "ArrayBuffer",
    correctAnswer: "answer1",
  },
  {
    topic: "css",
    title: "Which of the following is the universal selector?",
    answer1: "*",
    answer2: "~",
    answer3: "^",
    answer4: "#",
    correctAnswer: "answer1",
  },
  {
    topic: "css",
    title: "Font is changed with which property?",
    answer1: "font",
    answer2: "font-style",
    answer3: "font-format",
    answer4: "font-family",
    correctAnswer: "answer4",
  },
  {
    topic: "css",
    title: "How do you target multiple elements?",
    answer1: "h1 h2 div",
    answer2: "h1, h2, div",
    answer3: "h1-h2-div",
    answer4: "h1.h2.div",
    correctAnswer: "answer2",
  },
  {
    topic: "css",
    title: "Which of the following is a correct usage of a CSS variable?",
    answer1: "-main-background-color",
    answer2: "var(--main-background-color)",
    answer3: "let(main-background-color)",
    answer4: "var(-main-background-color)",
    correctAnswer: "answer2",
  },
  {
    topic: "css",
    title: "What does CSS stand for?",
    answer1: "Computer Sequenced Styles",
    answer2: "Cascading Short Styles",
    answer3: "Computer Serialized Styles",
    answer4: "Cascading Style Sheets",
    correctAnswer: "answer4",
  },
  {
    topic: "css",
    title:
      "Why does CSS belong in it's own file, instead of placing it inline with the html?",
    answer1: "It helps Search Engine Optimization",
    answer2: "CSS does not work in HTML",
    answer3: "CSS loads before the HTML does",
    answer4:
      "It separates the concerns of what is displayed and how it is displayed",
    correctAnswer: "answer4",
  },
  {
    topic: "css",
    title:
      "Why would you link another CSS file after an external CSS library, such as Bootstrap?",
    answer1: "It should actually be linked before the external library",
    answer2: "External CSS libraries also need a CSS file to run",
    answer3: "To override or add to styles created with another library",
    answer4: "To make the new styles work",
    correctAnswer: "answer3",
  },
  {
    topic: "css",
    title: "Why should you list several font families?",
    answer1:
      "If a browser does not support a font, it can default to another one",
    answer2: "To give the user options to select an accessible font",
    answer3: "You should only list one font in CSS",
    answer4: "Search Engine Optimization prefers simple fonts",
    correctAnswer: "answer1",
  },
  {
    topic: "css",
    title: "How do you write a comment in CSS?",
    answer1: "// Comment here",
    answer2: "/* Comment here */",
    answer3: "<-- Comment here -->",
    answer4: "<- Comment here ->",
    correctAnswer: "answer2",
  },
  {
    topic: "css",
    title: "What does ':root' do in CSS?",
    answer1: "It refers to the <main> element",
    answer2: "It refers to the <body> element",
    answer3: "It targets the lowest level grandchild element of the DOM",
    answer4: "It targets the highest level parent element of the DOM",
    correctAnswer: "answer4",
  },
  {
    topic: "html",
    title: "Which of the following is a correct self-closing tag?",
    answer1: "<p />",
    answer2: "<div />",
    answer3: "<br />",
    answer4: "<section />",
    correctAnswer: "answer3",
  },
  {
    topic: "html",
    title: "What does HTML stand for?",
    answer1: "Hyper Text Machine Language",
    answer2: "Hyperlink Terminal Machine Language",
    answer3: "Hyperlink Transit Markup Language",
    answer4: "Hypertext Markup Language",
    correctAnswer: "answer4",
  },
  {
    topic: "html",
    title: "Which of the following would be the largest heading?",
    answer1: "<h1>",
    answer2: "<h2>",
    answer3: "<h3>",
    answer4: "<h4>",
    correctAnswer: "answer1",
  },
  {
    topic: "html",
    title: "Which of the following would be the largest heading?",
    answer1: "<h1>",
    answer2: "<h2>",
    answer3: "<h3>",
    answer4: "<h4>",
    correctAnswer: "answer1",
  },
  {
    topic: "html",
    title: "What would you place in the head of an html file?",
    answer1: "body",
    answer2: "article",
    answer3: "metadata",
    answer4: "CSS properties",
    correctAnswer: "answer3",
  },
  {
    topic: "html",
    title: "Why would you choose to place a script in the head of html?",
    answer1: "To serialize to script into meta data",
    answer2: "To allow the script to run before the document is loaded",
    answer3: "You should never place a script in the head",
    answer4: "To compile the JavaScript into HTML",
    correctAnswer: "answer2",
  },
  {
    topic: "html",
    title: "Why would one choose to use HTML4 instead of the more modern HTML?",
    answer1: "No one should use older versions on HTML",
    answer2: "It is supported by more browsers",
    answer3: "It is more secure than HTML5",
    answer4: "HTML4 has more features than HTML5",
    correctAnswer: "answer2",
  },
  {
    topic: "html",
    title: "How would you code a hyperlink?",
    answer1: "<a href='http://www.google.com'>Google</a>",
    answer2: "<a ref='http://www.google.com'>Google</a>",
    answer3: "<a src='http://www.google.com'>Google</a>",
    answer4: "<hl href='http://www.google.com'>Google</hl>",
    correctAnswer: "answer1",
  },
  {
    topic: "html",
    title:
      "Code a client-side script tag, if it was located in a directory called javascript in the same directory as the html file?",
    answer1: "<script src='./javascript/script.js'></script>",
    answer2: "<script src='/script.js'></script>",
    answer3: "<script src='../javascript/script.js'></script>",
    answer4: "<script src='/javascript/script.js'></script>",
    correctAnswer: "answer1",
  },
  {
    topic: "html",
    title: "What does target='_blank' do?",
    answer1: "It is a placeholder for anchor tags that don't go anywhere",
    answer2: "It doesn't do anything",
    answer3: "Opens that link in a new tab",
    answer4: "Opens a link in the same tab",
    correctAnswer: "answer3",
  },
];

const seedQuestion = () => Question.bulkCreate(questionData);

module.exports = seedQuestion;
