window.onload = function () {


  //declaring variables
  var correctN = 0;
  var incorrectN = 0;
  var unansweredN = 0;
  var timeRemaining = 30;
  var intervalId;
  var timerRunning = false;
  $("#startGame").on("click", start);


  // 

  function start() {
    if (!timerRunning) {
      // clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
      timerRunning = true;
      $(".startButtonArea").hide();
      $("#mainArea").show();

    }

    function decrement() {
      $("#timer").html(timeRemaining);
      timeRemaining--;

      if (timeRemaining < 0) {



        stop();
      }
    }

    $("#doneGame").on("click", stop);

    function stop() {
      clearInterval(intervalId);
      timerRunning = false;
      var i;
      var answers;
      var wrong;


      for (i = 1; i < 6; i++) {
        var answers = ("#correct" + [i])
        var wrong = (".incorrect" + [i])

        if ($(answers).prop('checked')) {
          correctN++
        }

        else if ($(wrong).prop('checked')) {
          incorrectN++
        } else {
          unansweredN++;
        }

      }

      // if ($('input[name="question1"]:checked').length < 1) {
      //     unansweredN++; 
      //   }
      //   if ($('input[name="question2"]:checked').length < 1) {
      //     unansweredN++; 
      //   }
      //   if ($('input[name="question3"]:checked').length < 1) {
      //     unansweredN++; 
      //   }
      //   if ($('input[name="question4"]:checked').length < 1) {
      //     unansweredN++; 
      //   }

      $("#correctAnswersText").append(correctN);
      $("#incorrectAnswersText").append(incorrectN);
      $("#unansweredText").append(unansweredN);
      $("#gameQuestions").hide();
      $("#gameResults").show();


    }


  }

  $("#playAgain").on("click", playAgain);

  function playAgain() {

    location.reload();
  }





}