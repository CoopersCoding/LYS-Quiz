document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Collect survey answers
    var formData = new FormData(this);
    var answers = [];
    for (var pair of formData.entries()) {
      answers.push(pair[1]);
    }
  
    // Determine the most popular answer
    var answerCounts = {};
    var maxCount = 0;
    var maxAnswer;
  
    for (var i = 0; i < answers.length; i++) {
      var answer = answers[i];
      if (answerCounts[answer]) {
        answerCounts[answer]++;
      } else {
        answerCounts[answer] = 1;
      }
  
      if (answerCounts[answer] > maxCount) {
        maxCount = answerCounts[answer];
        maxAnswer = answer;
      }
    }
  
    // Display the most popular answer
    var resultContainer = document.getElementById("result");
    resultContainer.textContent = "The most popular answer is: " + maxAnswer;
  });