

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
    clearInterval(intervalId);
    clockRunning = false;
    alert(answerAlert);
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

var correct = 0;
var wrong = 5;
var _1stQuestion = $("input[name=question1]:radio");
var _2ndQuestion = $("input[name=question2]:radio");
var _3rdQuestion = $("input[name=question3]:radio");
var _4thQuestion = $("input[name=question4]:radio");
var _5thQuestion = $("input[name=question5]:radio");

var answerAlert = function() {

  alert("Correct:" + " " + correct + "    " +  "Wrong:" + " " + wrong);
}

/* Button Clicks */
/********************/
window.onload = function() {

  $("#startTimer").on("click", start);
  $("#startTimer").on("click", stop);
  $("#submitButton").on("click", answerAlert);
}
