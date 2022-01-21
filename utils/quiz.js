//global variables
let countdown = $("#countdown");
let timeLeft = 300;
let startPageArray = [];
let currentQuestion = 0;

const questionArray = [
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
      answer4:
        "window.alert(`My grandma` ${name} `still uses Internet Explorer`)",
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

//https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68
// const NO_OF_HIGH_SCORES = 10;
// const HIGH_SCORES = "highScores";
// const highScoreString = localStorage.getItem(HIGH_SCORES);
// const highScores = JSON.parse(highScoreString) ?? [];

// function checkHighScore(score) {
//   const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
//   const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;

//   if (score > lowestScore) {
//     saveHighScore(score, highScores);
//     showHighScores();
//   }
// }

function saveHighScore(score, highScores) {
  const name = prompt("You got a highscore! Enter name:");
  const newScore = { score, name };
  // timeLeft = 0;

  // 1. Add to list
  // highScores.push(newScore);

  // // 2. Sort the list
  // highScores.sort((a, b) => b.score - a.score);

  // // 3. Select new list
  // highScores.splice(NO_OF_HIGH_SCORES);

  // // 4. Save to local storage
  // localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
}

// let showHighScores = function () {
//   // Clear screen
//   $("main").html("");

//   // Display end game screen
//   $("main").append(
//     "<h2 class='col-8 offset-2 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white text-center'>HIGH SCORES<h2>"
//   );
//   $("main").append(
//     "<ol id='highScores' class='col-8 offset-2 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white text-center'></ol>"
//   );

//   //https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68
//   const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
//   const highScoreList = document.getElementById(HIGH_SCORES);

//   highScoreList.innerHTML = highScores
//     .map((score) => `<li>${score.score}............${score.name}`)
//     .join("");

//   // Create restart button
//   $("main").append(
//     "<button id='restart' class='col-8 offset-2 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white text-center bg-secondary'>Go Back</button>"
//   );
//   // Add event listener to restart/go back button
//   $("#restart").on("click", function () {
//     restartGame();
//   });

//   // Create clear highscores button
//   $("main").append(
//     "<button id='clearScores' class='col-8 offset-2 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white text-center bg-secondary mt-2'>Clear High Scores</button>"
//   );
//   // Add event listener to restart/go back button
//   $("#clearScores").on("click", function () {
//     alert("Clearing Scores");
//     window.localStorage.removeItem("highScores");
//     window.location.reload();
//   });
// };

const endGame = function () {
  checkHighScore(timeLeft);
};

// Captures HTML at start so it can be replaced when game ends
const recordStartPage = () => {
  startPageArray = $("main").html();
};

// Wait for document to render
$(document).ready(() => {
  recordStartPage();

  $("#start-btn").on("click", function () {
    startGame();
  });

  // $("#highscoreChart").on("click", function () {
  //   showHighScores();
  //   timeLeft = 0;
  // });
});

const buildQuestionTemplate = () => {
  // Check if there are any more questions
  const checkIfGameEnd = function () {
    if (currentQuestion >= questionArray.length) {
      endGame();
    } else if (timeLeft <= 0) {
      endGame();
    } else {
      buildQuestionTemplate();
    }
  };

  // Check accuracy functions
  const correct = () => {
    currentQuestion += 1;
    checkIfGameEnd();
  };
  const incorrect = () => {
    currentQuestion += 1;
    timeLeft -= 10;
    checkIfGameEnd();
  };

  // Clear screen
  $("main").html("");

  // Add question
  $("main").append(
    "<br><br><p id='title' class='col-8 offset-2 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white'></p><br><br>"
  );

  /// Add answer buttons
  $("main").append(
    "<button id='answer1' class='col-6 offset-3 col-md-6 offset-md-3 text-white bg-secondary mt-2 p-2'>ANSWER1</button>"
  );
  $("main").append(
    "<button id='answer2' class='col-6 offset-3 col-md-6 offset-md-3 text-white bg-secondary mt-2 p-2'>ANSWER2</button>"
  );
  $("main").append(
    "<button id='answer3' class='col-6 offset-3 col-md-6 offset-md-3 text-white bg-secondary mt-2 p-2'>ANSWER3</button>"
  );
  $("main").append(
    "<button id='answer4' class='col-6 offset-3 col-md-6 offset-md-3 text-white bg-secondary mt-2 p-2'>ANSWER4</button>"
  );

  // Fill in question title
  $("#title").text(questionArray[currentQuestion].title);
  // Fill in possible answers
  $("#answer1").text(questionArray[currentQuestion].answer1);
  $("#answer2").text(questionArray[currentQuestion].answer2);
  $("#answer3").text(questionArray[currentQuestion].answer3);
  $("#answer4").text(questionArray[currentQuestion].answer4);

  // Check accuracy
  $("#answer1").on("mousedown", function () {
    if (questionArray[currentQuestion].correctAnswer == "answer1") {
      correct();
    } else {
      incorrect();
    }
  });

  $("#answer2").on("mousedown", function () {
    if (questionArray[currentQuestion].correctAnswer == "answer2") {
      correct();
    } else {
      incorrect();
    }
  });

  $("#answer3").on("mousedown", function () {
    if (questionArray[currentQuestion].correctAnswer == "answer3") {
      correct();
    } else {
      incorrect();
    }
  });

  $("#answer4").on("mousedown", function () {
    if (questionArray[currentQuestion].correctAnswer == "answer4") {
      correct();
    } else {
      incorrect();
    }
  });
};

let startGame = function () {
  // Clear screen
  $("main").html("");

  // Reset variables
  timeLeft = 300;
  currentQuestion = 0;

  //https://www.freecodecamp.org/news/javascript-timers-everything-you-need-to-know-5f31eaa37162/
  let clock = () => {
    if (timeLeft > 1) {
      timeLeft--;
      countdown.text(timeLeft);
    } else {
      showHighScores(timeLeft);
      endGame();
      clearInterval(increment);
    }

    if (!questionArray[currentQuestion]) {
      showHighScores(timeLeft);
      clearInterval(increment);
    }
  };
  // Start timer
  let increment = setInterval(clock, 1000);

  // Build question template
  buildQuestionTemplate();
};

let restartGame = function () {
  // Loads saved HTML
  $("main").html(startPageArray);
  // Re-Apply Event Listener
  $("#start-btn").on("click", function () {
    startGame();
  });
};
