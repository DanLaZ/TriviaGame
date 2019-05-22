
/* Timer Code */
/*****************/

/* Timer */
var time = 120;
var clockRunning = false;
var intervalId;
//
var stopAtZero = setTimeout(stop, (2 * 60 * 1000) + 2000 );

window.onload = function() {

    $("#startTimer").on("click", start);
    $("#startTimer").on("click", stopAtZero);
}

function start() {

    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
}

function stop() {

    if (time === 0) {
        clearInterval(intervalId);
        clockRunning = false;
    }
    alert("Time's up!");
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


/* SetTime Function */
var countDown = setTimeout(postResults, (2 * 60 * 1000) + 2000 ); //<=== set for 2mins
$("#startTimer").on("click", countDown);

/*  */


