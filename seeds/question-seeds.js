const { Question } = require('../models');

const questionData = [
    {
      title: "What does JSON stand for?",
      answer1: "JavaScript Sequential Oriented Notation",
      answer2: "JavaScript Object Notation",
      answer3: "Java Sequence Oriented Notation",
      answer4: "Java Software Object Notation",
      correctAnswer: "answer2",
    },
    {
      title: "Select the nullish coalescing operator operator",
      answer1: "??",
      answer2: "&&",
      answer3: "||",
      answer4: "==",
      correctAnswer: "answer3",
    },
    {
      title: "Which of the following is an example of a template literal?",
      answer1: "console.log('do JavaScript quizzes' + num + ' times a day')",
      answer2: "alert('use leetcode' + num+ ' times a week')",
      answer3: "console.log(`My grandma ${name} still uses Internet Explorer`)",
      answer4: "window.alert(`My grandma` ${name} `still uses Internet Explorer`)",
      correctAnswer: "answer3",
    },
    {
      title: "Select the or operator",
      answer1: "??",
      answer2: "&&",
      answer3: "||",
      answer4: "==",
      correctAnswer: "answer3",
    },
    {
      title: "Which of the following is an example of an array?",
      answer1: "let animals = ['Lions', 'Tigers', 'Bears]",
      answer2: "let animals = {'Lions', 'Tigers', 'Bears]}",
      answer3: "let animals = <'Lions', 'Tigers', 'Bears>",
      answer4: "let animals = {animals: 'Lions'}",
      correctAnswer: "answer1",
    },
    {
      title: "Select the one that is NOT a comparison operator",
      answer1: "!=",
      answer2: "===",
      answer3: "==",
      answer4: "=",
      correctAnswer: "answer4",
    },
    {
      title: "Select an example of camel case",
      answer1: "HIGH_SCORES",
      answer2: "high_scores",
      answer3: "high-scores",
      answer4: "highScores",
      correctAnswer: "answer4",
    },
    {
      title: "Which of the following is NOT a Javascript data type?",
      answer1: "Undefined",
      answer2: "String",
      answer3: "Null",
      answer4: "console.log()",
      correctAnswer: "answer4",
    },
    {
      title: "Which of the following is an example of a primitive type?",
      answer1: "Boolean",
      answer2: "Object",
      answer3: "Function",
      answer4: "Method",
      correctAnswer: "answer1",
    },
    {
      title: "The method alert() is built into what object?",
      answer1: "Window",
      answer2: "Error",
      answer3: "Map",
      answer4: "ArrayBuffer",
      correctAnswer: "answer1",
    },
];
  
  const seedQuestion = () => Question.bulkCreate(questionData);
  
  module.exports = seedQuestion;