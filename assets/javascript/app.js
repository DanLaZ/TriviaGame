

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
    alert(resultsAlert());
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

function addToCorrect() {

  correct++;
  wrong--;
}

function resultsAlert() {

  alert("Correct:" + " " + correct + "    " +  "Wrong:" + " " + wrong);
}

function submitAnswers() {

  clearInterval(intervalId);
  clockRunning = false;
  alert(resultsAlert());
  window.location.reload();
}



/* pieces needed */

// var number=document.getElementById("rightAnswer").value;

 
/* Button Clicks */
/********************/

window.onload = function() {

  $("#startTimer").on("click", start);
  $("#startTimer").on("click", stop);
  $("#submitButton").on("click", submitAnswers);  
}

