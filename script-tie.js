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
    var maxAnswers = [];
  
    for (var i = 0; i < answers.length; i++) {
      var answer = answers[i];
      if (answerCounts[answer]) {
        answerCounts[answer]++;
      } else {
        answerCounts[answer] = 1;
      }
  
      if (answerCounts[answer] > maxCount) {
        maxCount = answerCounts[answer];
        maxAnswers = [answer];
      } else if (answerCounts[answer] === maxCount) {
        maxAnswers.push(answer);
      }
    }
  
    // Display the most popular answer(s)
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";
  
    if (maxAnswers.length === 1) {
      resultContainer.textContent = "Congratulations! Sign up now for the " + maxAnswers[0] + "path!";
    } else {
      var resultElement = document.createElement("div");
      resultElement.innerHTML = "Congratulations! You qualify for the following answers:";
      resultContainer.appendChild(resultElement);
  
      var listElement = document.createElement("ul");
      for (var j = 0; j < maxAnswers.length; j++) {
        var listItem = document.createElement("li");
        listItem.textContent = maxAnswers[j];
        listElement.appendChild(listItem);
      }
      resultContainer.appendChild(listElement);
    }


});
