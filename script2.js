// create questions here
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
//answer buttons
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    } 
    this.questionIndex++; //this allows you to guess
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}









// create questions here
var questions = [
    new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("Webdevtrick.com is about..", ["Web Design", "Graphic Design", "SEO & Development", "All"], "All")
    
];
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();