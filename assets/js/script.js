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

// function to hide the container cards
function hideContainers() {
  document.getElementById("instructions-card").style.visibility = "hidden";
  document.getElementById("questions-card").style.visibility = "hidden";
  document.getElementById("finalScore-card").style.visibility = "hidden";
  document.getElementById("leaders-card").style.visibility = "hidden";
}


function beginQuiz() {
  // hide all containers but questions
  hideContainers();
  document.getElementById("questions-card").style.visibility = "visible";
  
  // index user's current question, then call showQuestion function to display on the page
  currentQuestion = 0;
  showQuestion();
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

// begin with all containers but instructions hidden
hideContainers();
document.getElementById("instructions-card").style.visibility = "visible";

// button click starts the quiz
document.querySelector("#startBtn").addEventListener("click", beginQuiz);