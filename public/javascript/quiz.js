let currentQuestion = 0;
let questionArray = [];

const fetchQuiz = async () => {
  const response = await fetch("/api/js", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    const data = await response.json();

    data.forEach(
      ({ title, answer1, answer2, answer3, answer4, correctAnswer }) => {
        questionArray.push({
          title,
          answer1,
          answer2,
          answer3,
          answer4,
          correctAnswer,
        });
      }
    );

  } else {
    response.statusText;
  }
};

// Wait for document to render
window.addEventListener("DOMContentLoaded", async (event) => {
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
};

let showHighScores = function () {};

const endGame = function () {
  checkHighScore(timeLeft);
};

const buildQuestionTemplate = () => {
  // Check if there are any more questions
  const checkIfGameEnd = function () {
    if (currentQuestion >= questionArray.length) {
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
  $("main").append("<br><br><p id='title' class=''></p><br><br>");

  /// Add answer buttons
  $("main").append("<button id='answer1' class=''>ANSWER1</button>");
  $("main").append("<button id='answer2' class=''>ANSWER2</button>");
  $("main").append("<button id='answer3' class=''>ANSWER3</button>");
  $("main").append("<button id='answer4' class=''>ANSWER4</button>");

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

  // Build question template
  buildQuestionTemplate();
};

let restartGame = function () {
  document.location.reload();
};
