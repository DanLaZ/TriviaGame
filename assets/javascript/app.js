
/* Timer Code */
/*****************/

/* Timer */
var time = 0;
var clockRunning = false;
var intervalId;

window.onload = function() {

    $("#startTimer").on("click", start);
};

function start() {

    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
    alert("You have 2mins to submit your answers. Good Luck Buddy =D");
}

function count() {

    time++;
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


/* SetTime Function */
var countDown = setTimeout(postResults, 2 * 60 * 1000); //<=== set for 2mins

$("#startTimer").on("click", countDown);

/*  */


