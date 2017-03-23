//variables
var correctAnswers = 0;
var wrongAnswers = 0;
var timeRemaining = 30;




$("#Timer-Button").click(function() {
    setInterval(function(){
    	timeRemaining--;
    	$("#Timer").text("Time Remaining: " + timeRemaining);
    	if(timeRemaining === 0) {
    $("#GameContainer").html('<h1> Your Results! </h1> <br><br><br> <h1 id="correctAnswersDisplay"> Correct: </h1> <br><br><br> <h1 id="wrongAnswersDisplay"> Wrong: </h1> <br><br> <h1> Thank you for playing! </h1> <br><br><br> <img id="img123" src="Assets/Images/eec.jpg" height="300px" width="350px">');
    $("#correctAnswersDisplay").text("Correct: " + correctAnswers);
    $("#wrongAnswersDisplay").text("Wrong: " + wrongAnswers);
};
    }, 1000);
});

$(".True").click(function() {
    correctAnswers++;
    console.log("correct " + correctAnswers);
});

$(".False").click(function() {
    wrongAnswers++;
    console.log("wrong " + wrongAnswers);
});

$("#Results-Button").click(function() {
    $("#GameContainer").html('<h1> Your Results! </h1> <br><br><br> <h1 id="correctAnswersDisplay"> Correct: </h1> <br><br><br> <h1 id="wrongAnswersDisplay"> Wrong: </h1> <br><br> <h1> Thank you for playing! </h1> <br><br><br> <img id="img123" src="Assets/Images/eec.jpg" height="300px" width="350px">');
    $("#correctAnswersDisplay").text("Correct: " + correctAnswers);
    $("#wrongAnswersDisplay").text("Wrong: " + wrongAnswers);
});