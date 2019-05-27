

/* Timer Code */
/*****************/

/* Timer */
var time = 120;
var clockRunning = false;
var intervalId;


function start() {

  if (!clockRunning) {

    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}

function stop() {

  setTimeout(function() {

    submitAnswers();
    window.location.reload();
  }, 120000)
}

function count() {

  time--;
  var converted = timeConverter(time);
  $("#timerCount").text(converted);
}

function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;

}

/* Logging Correct Answers */
/*****************************/

function submitAnswers() {
  
  var correct = 0;
  var wrong = 5;
  var numOfQuestions = 5;

  var correctAnswer = "rightAnswer";
  
  var q1 = document.forms["questions"]["question1"].value;
  var q2 = document.forms["questions"]["question2"].value;
  var q3 = document.forms["questions"]["question3"].value;
  var q4 = document.forms["questions"]["question4"].value;
  var q5 = document.forms["questions"]["question5"].value;

  for(var i = 1; i <= numOfQuestions; i++) {
    if(eval("q" + i) == correctAnswer) {
      correct++;
      wrong--;
    }
  }

  alert("Correct:" + " " + correct + " " + "Wrong:" + " " + wrong)

}
 
/* Button Clicks */
/********************/

window.onload = function() {

  $("#startTimer").on("click", start);
  $("#startTimer").on("click", stop);
  $("#submitButton").on("click", submitAnswers);  
}

