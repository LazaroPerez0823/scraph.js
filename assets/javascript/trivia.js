window.onload = function () {


  //declaring variables
  var correctN = 0;
  var incorrectN = 0;
  var unanswered;
  var timeRemaining = 5;
  var intervalId;
  $("#startGame").on("click", start);
  $("#doneGame").on("click", stop);

  // 

  function start() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $(".startButtonArea").hide();
    $("#mainArea").show();


    function decrement() {
      $("#timer").html(timeRemaining);
      timeRemaining--;

      if (timeRemaining === 0) {

        stop();
      }
    }


    function stop() {

      var i;
      var answers; 
        for (i = 1; i < 5; i++) {
        var answers = ("#correct" + [i])
        if ($(answers).prop('checked')) {
          correctN++
        } else {
          incorrectN++
        }
  
      }

      displayScores();


    }


  }

  function displayScores() {
    console.log(correctN);
    console.log(incorrectN);

  }
}