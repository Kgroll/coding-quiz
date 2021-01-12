//var count = 75;
//var myTimer;

//var myClock = function () {
 //   count--
 //   timerNumber.innerHTML = count;
 ////   if (count === 0) {
 /////       clearInterval(myTimer);
 //   }
//}

//function clock() {
  //  instructions.classList.add('hide')
  //  questionContainer.classList.remove('hide')
   // myTimer = setInterval(myClock, 1000);
//}
$(document).ready(function() {  
    var welcomeBox = $("#welcome");
    var questionContainer = $("#question");
    var endingScoreBox = $("#endingScoreBox");
    var highScoresBox = $("#highScores");
    var scores = JSON.parse(localStorage.getItem("scores") || "[]");


   
   
    var startQuizBtn = $("#startQuiz");
    var highScoresBtn = $("#highScoreBtn");
welcomeBox.show();
startQuizBtn.click(function() {
    welcomeBox.hide();
   // questionContainer.show();
});

//timer




//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//starting screen


//var questionContainer = document.querySelector('#question-container')

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if(seconds <= 0) clearInterval(countdown);
}, 1000);





function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
        element.addEventListener('click', () => {
            clearInterval(countdown)
            timerNumber.innerHTML = -5
            myTimer = setInterval(myClock, 1000);
        })
    }
}
 
 //WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score
// creating an array and passing the number, questions, options, and answers
//document.getElementById("startQuiz").addEventListener("click");


function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
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
};
 
// create questions here
var questions = [
    new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("Webdevtrick.com is about..", ["Web Design", "Graphic Design", "SEO & Development", "All"], "All")
    
];
 console.log(showScores)
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
//start.addEventListener("click", startQuiz);


//save high score
    var scoreList = document.querySelector("#highScore-list");
    var storedHighscoresString = localStorage.getItem("highscores"); 
    var highscores = {
        initials : [],
        scores : [],
    }

    function getScores(){

    } 
    if (storedHighscoresString !== null) {

        var storedHighscores = JSON.parse(storedHighscoresString);
        highscores.initials = storedHighscores.initials;
        highscores.scores = storedHighscores.scores;
    }
    else {
        highscores.initials = [];
        highscores.scores = [];
    }


    function renderScores() {
        scoreList.innerHTML = "";
        
        getScores();

        for (var i = 0; i <highscores.initials.length; i++) {
            var listEl = document.createElement("li");
            var pEl = document.createElement("p");
            pEl.setAttribute("class", "highscore");
            pEl.textContent = (i + 1) + ". " + highscores.initials[i] + " - " + highscores.scores[i];

            listEl.appendChild(pEl);
            scoreList.appendChild(listEl);
        }
    }

    function saveScore(newInitials, newScore) {
        getScores();

        highscores.initials.push(newInitials);
        highscores.scores.push(newScore);

        var highscoresString = JSON.stringify(highscores);
        localStorage.setItem("highscores", highscoresString);
    }
    function clearScores() {
        localStorage.removeItem("highscores");
        renderScores();
    }
    if (scoreList !== null) {
        renderScores();
    }

    var allScores = localStorage.getItem("allScores");
    allScores = JSON.parse(allScores);
    
    if (allScores !== null) {
        for (var i = 0; i < allScores.length; i++) { 
            var createLi = document.createElement("li");
            createLi.textContet = allScores[i].initials + " " + allScores[i].score;
            highScore.append(createLi);
            console.log(highscores);
      }
    }
})
