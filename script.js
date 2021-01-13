 //WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score
// creating an array and passing the number, questions, options, and answers


$(document).ready(function() {  
    var welcomeBox = $("#welcome");
    var startQuizBtn = $("#startQuiz");
    var questionContainer = $("#question");
    var questionContainerBtn = $("#btn0, #btn1, #btn2, #btn3");
    var addProgress = $("#progress");
    var questionIndex = 0;
    var timerInterval = ">= 0";
    
    var highScoresBox = $("#highScores");
    var scores = JSON.parse(localStorage.getItem("scores") || "[]");
    var highScoresBtn = $("#highScoreBtn");

 //welcome screen          
welcomeBox.show();
questionContainer.hide();
questionContainerBtn.hide();
addProgress.hide();

//start quiz and timer

startQuizBtn.click(function() {
    welcomeBox.hide();    
   questionContainer.show();
   questionContainerBtn.show();
   addProgress.show();
})
//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question

//timer
var timeLeft = 5
var timer = document.getElementById("timer")
timer.innerHTML = timeLeft;
//button on click
var button = document.getElementById("startQuiz")
button.addEventListener("click", function() {

    var clock = setInterval(function() {
    var captureUserScore = timeLeft
        timeLeft--;
        timer.textContent = "";
        timer.textContent = "Time: " + timeLeft;
        if (timeLeft === 0 || questionIndex.length) {
            clearInterval()
            if (timeLeft >= 0)
            console.log(showScores);
        }
        }, 1000);
    })
});


//quiz questions start this must stay

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
} 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
  
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 console.log(showScores);
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score is: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

 

 console.log(showScores)

//start.addEventListener("click", startQuiz);

function isCorrectAnswer() {
    var answer = questions[questionIndex].answer;
    userAnswer = this.innerHTML;

    if (userAnswer === answer) {
        console.log ("answer correct");
    } else if (userAnswer !== answer) {
        removeTime();
        console.log("answer incorrect");
    }
    questionIndex++;
    if (questionIndex === questions.length) {
        console.log(getScore());
        window.location.href = "index2.html";
        }  
        displayQuestion();
        console.log("finish isCorrectAnswer");
      }      
     // var secondsRemaining = questionIndex  
      function removeTime() {
        secondsRemaining -= 15;
      }
     clearTimeout();
      function getScore() {
        return secondsRemaining;
      }
     // localStorage.setItem("Score", endingScore);
    }
      function getUserInfo() {}
      
      function saveScore() {}
      
      console.log();  
        


     
//save high score
 var getUserName;

 //function getUserName() {
  //   userName = prompt("Please enter your initials:");
  //   localStorage.setItem("Initials", userName);

     //if ((userName = "")) {
      //   alert("Please enter your initials")
     
    
 
 //getUserName();

 //function displayHighscores() {
//document.getElementById("Initials").innerHTML = localStorage.getItem("Initials");
     //document.getElementById("scores").innerHTML = localStorage.getItem("Scores");
     

//displayHighscores();