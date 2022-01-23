//global variables
// let countdown = document.querySelector("#countdown");
let timeLeft = 300;
let startPageArray = [];
let currentQuestion = 0;
let questionArray = [
];

const fetchQuiz = async () => {
  // async function fetchQuiz(event) {
  const response = await fetch("/api/js", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    const data = await response.json();

    data.forEach(({ title, answer1, answer2, answer3, answer4, correctAnswer}) => {
         questionArray.push( {title, answer1, answer2, answer3, answer4, correctAnswer} );
    })
   
    console.log(questionArray);
  } else {
    response.statusText;
  }
};

// Captures HTML at start so it can be replaced when game ends
const recordStartPage = () => {
  startPageArray = $("main").html();
};

// Wait for document to render
window.addEventListener("DOMContentLoaded", async (event) => {
  console.log("DOM fully loaded and parsed");

  recordStartPage();

  // Fetch questions
  fetchQuiz();

  $("#start-btn").on("click", function () {
    startGame();
  });
});

/// endGame fires checkHighScore
function checkHighScore(score) {
  const highScores = 1; // Placeholder
  const lowestScore = 1; // placeholder

  if (score > lowestScore) {
    saveHighScore(score, highScores);
    showHighScores();
  }
}

function saveHighScore(score, highScores) {
    /// Change to Modal
  const accuracyModal = alert("Your accuracy was:");
  restartGame();
}

let showHighScores = function () {};
/////

// Create restart button
$("main").append("<button id='restart' class=''>Go Back</button>");
// Add event listener to restart/go back button
$("#restart").on("click", function () {
  restartGame();
});

const endGame = function () {
  console.log("game end");
  checkHighScore(timeLeft);
};

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

  console.log("game started");

  // Reset variables
  timeLeft = 300;
  currentQuestion = 0;

  //https://www.freecodecamp.org/news/javascript-timers-everything-you-need-to-know-5f31eaa37162/
  let clock = () => {
    if (timeLeft > 1) {
      timeLeft--;
    } else {
      showHighScores(timeLeft);
      endGame();
      clearInterval(increment);
    }

    if (!questionArray[currentQuestion]) {
      //   showHighScores(timeLeft);
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
