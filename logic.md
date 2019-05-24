// var correct = 0;
// var wrong = 5;

/* Correct/Wrong Counter */
// var postResults = function() {
//   document.forms["question1"].submit();
//   document.forms["question2"].submit();
//   document.forms["question3"].submit();
//   document.forms["question4"].submit();
//   document.forms["question4"].submit();
//   return true;

// }

// var getResults = function() {

//   var answers = document.getElementById("question1").attributes.length;
//   var resultsDiv = $("#showResults");
//   resultsDiv.append(answers);
// }

// var answerLogic = function() {

//   if(rightAnswer is selected) {
//     correct++;
//     wrong--;
//   }

// }

/* Basic logic is to record that a radio button is checked. */ 
/* If the right answer is checked then add 1 to the correct var and -1 from the wrong var. (answerLogic function) */
/* 


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
    alert("Time's up!");
    window.location.reload();
  }, 120000)
}