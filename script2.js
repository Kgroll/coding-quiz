var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

//clear.addEventListener("click", function() {
    

    //localStorage.clear();
    //location.reload();    
//});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) { 
        var createLi = document.createElement("li");
        createLi.textContet = allScores[i].initials + " " + allScores[i].score;
        highScore.append(createLi);
    }
}


//goBack.addEventListener("click", function() {
    //window.location.replace("./index2.html");
//});