// assign the question texts to an array
const quizQuestions = [
  {
    questionText: "Inside which HTML element do you put JavaScript?",
    options: ["1. <var>", "2. <script>", "3. <section>", "4. <code>"],
    correct: "2. <script>",
  },
  {
    questionText: "Which is the correct way to comment in JavaScript?",
    options: ["1. [# ... #}", "2. <!-- ... -->", "3. // ...", "4. /-- ... --/"],
    correct: "3. // ...",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ____.",
    options: ["1. other arrays", "2. numbers and strings", "3. booleans", "4. all of the above"],
    correct: "4. all of the above",
  },
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. booleans", "2. strings", "3. alerts", "4. numbers"],
    correct: "3. alerts",
  },
  {
    questionText: "String values must be enclosed within ____ when being assigned to variables.",
    options: ["1. curly brackets", "2. commas", "3. parentheses", "4. quotes"],
    correct: "4. quotes",
  },
  {
    questionText: "Which of the following can be used to terminate a loop, switch, or label statement?",
    options: ["1. break", "2. exit", "3. end", "4. stop"],
    correct: "1. break",
  },
];

// global variables
var currentQuestion = "";
var time = "";
var interval = "";
const resultDiv = document.querySelector("#results");
const resultText = document.querySelector("#results-text");

// function to hide the container cards
function hideContainers() {
  document.getElementById("instructions-card").style.visibility = "hidden";
  document.getElementById("questions-card").style.visibility = "hidden";
  document.getElementById("finalScore-card").style.visibility = "hidden";
  document.getElementById("leaders-card").style.visibility = "hidden";
}

// begin with all containers but instructions hidden
hideContainers();
document.getElementById("instructions-card").style.visibility = "visible";

// hide results div
function hideResultText() {
  resultDiv.style.display = "none";
}

// button click starts the quiz
document.querySelector("#startBtn").addEventListener("click", beginQuiz);

function beginQuiz() {
  // hide all containers but questions
  hideContainers();
  document.getElementById("questions-card").style.visibility = "visible";
  
  // index user's current question, then call showQuestion function to display on the page
  currentQuestion = 0;
  showQuestion();

  // set total time by number of questions
  time = quizQuestions.length * 10;

  // executes "countdown" function every second to update time
  interval = setInterval(countdown, 1000);

  // call displayTime() to display on page on Start Quiz button click
  displayTime();
}

// countdown function reduces by 1, displays new value, and ends quiz when time runs out
function countdown() {
  time--;
  displayTime();
  if (time < 1) {
    endQuiz();
  }
}

// display time on page
const timeDisplay = document.querySelector("#timer");
function displayTime() {
  timeDisplay.textContent = time;
}

// display question and answers for currentQuestion
function showQuestion() {
  // setting variables
  let question = quizQuestions[currentQuestion];
  let answers = question.options;
  
  // replacing "Question Placeholder" in the element
  var questionH2El = document.querySelector("#questions-text");
  questionH2El.textContent = question.questionText;
  
  // display answer options
  for (let i = 0; i < answers.length; i++) {
    let answer = answers[i];
    let answerBtn = document.querySelector("#option" + i);
    answerBtn.textContent = answer;
  }
}

// when answer button is clicked, click event...
document.querySelector("#answer-options").addEventListener("click", answerCheck);

// compare clicked option to the correct answer
function correctAnswer(answerBtn) {
  return answerBtn.textContent === quizQuestions[currentQuestion].correct;
}

// function for incorrect answers
function answerCheck(eventObject) {
  let answerBtn = eventObject.target;
  
  if (correctAnswer(answerBtn)) {
    resultText.textContent = "Correct!";
    setTimeout(hideResultText, 1000);
  } else {
    resultText.textContent = "Wrong Answer. Time deducted.";
    setTimeout(hideResultText, 1000);
    if (time >= 10) {
      time = time - 10;
      displayTime();
    } else {
      // if time is less than 10, setting to 0 and ending quiz
      time = 0;
      displayTime();
      endQuiz();
    }

  }
}


// display score
const score = document.querySelector("#score");

// when quiz is done, clear timer, hide cards, and display final score card w/ score
function endQuiz() {
  clearInterval(interval);
  hideContainers();
  document.getElementById("finalScore-card").style.visibility = "visible";
  score.textContent = time;
}