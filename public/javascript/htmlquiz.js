let currentQuestion = 0;
let questionArray = [];
let score = 0;
let totalQuestions;
let accuracyIndicator;
let destroyIndicator = () => {setTimeout(() => $("#accuracy-indicator").text(" "), 2000);}

const fetchQuiz = async () => {
  const response = await fetch("/api/html", {
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

    // Set total questions number
    totalQuestions = questionArray.length;
  } else {
    response.statusText;
  }
};

// Wait for document to render, then fetch quiz questions
window.addEventListener("DOMContentLoaded", async (event) => {
  accuracyIndicator = document.querySelector("#accuracy-indicator");

  fetchQuiz();

  $("#start-btn").on("click", function () {
    startGame();
  });
});

const endGame = () => {
  const accuracyModal = alert(`Your accuracy was: ${score}/${totalQuestions}`);
  restartGame();
};

const buildQuestionTemplate = () => {
  // Check if there are any more questions
  const checkIfGameEnd = () => {
    if (currentQuestion >= questionArray.length) {
      endGame();
    } else {
      buildQuestionTemplate();
    }
  };

  // Check accuracy functions
  const correct = () => {
    currentQuestion += 1;
    $("#accuracy-indicator").text("Correct!");
    destroyIndicator();
    score++;
    checkIfGameEnd();
  };
  const incorrect = () => {
    $("#accuracy-indicator").text("Incorrect!");
    destroyIndicator();
    currentQuestion += 1;
    checkIfGameEnd();
  };

  // Clear screen
  $("#quiz-body").html("");

  // Add question
  $("#quiz-body").append("<div class='post-text'><br><br><p id='title' class=''></p><br><br></div>");

  /// Add answer buttons
  $("#quiz-body").append("<div class='post-text'><button id='answer1' class=''>ANSWER1</button></div>");
  $("#quiz-body").append("<div class='post-text'><button id='answer2' class=''>ANSWER2</button></div>");
  $("#quiz-body").append("<div class='post-text'><button id='answer3' class=''>ANSWER3</button></div>");
  $("#quiz-body").append("<div class='post-text'><button id='answer4' class=''>ANSWER4</button></div>");

  // Fill in question title
  $("#title").text(questionArray[currentQuestion].title);
  // Fill in possible answers
  $("#answer1").text(questionArray[currentQuestion].answer1);
  $("#answer2").text(questionArray[currentQuestion].answer2);
  $("#answer3").text(questionArray[currentQuestion].answer3);
  $("#answer4").text(questionArray[currentQuestion].answer4);

  // Check accuracy
  $("#answer1").on("mousedown", () => {
    if (questionArray[currentQuestion].correctAnswer == "answer1") {
      correct();
    } else {
      incorrect();
    }
  });

  $("#answer2").on("mousedown", () => {
    if (questionArray[currentQuestion].correctAnswer == "answer2") {
      correct();
    } else {
      incorrect();
    }
  });

  $("#answer3").on("mousedown", () => {
    if (questionArray[currentQuestion].correctAnswer == "answer3") {
      correct();
    } else {
      incorrect();
    }
  });

  $("#answer4").on("mousedown", () => {
    if (questionArray[currentQuestion].correctAnswer == "answer4") {
      correct();
    } else {
      incorrect();
    }
  });
};

let startGame = () => {
  // Clear screen
  $("#quiz-body").html("");

  // Build question template
  buildQuestionTemplate();
};

let restartGame = () => {
  document.location.reload();
};
