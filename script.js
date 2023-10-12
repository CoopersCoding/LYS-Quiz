document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Collect survey answers
    var formData = new FormData(this);
    var answers = {};
    for (var pair of formData.entries()) {
      answers[pair[0]] = parseInt(pair[1]);
    }

    // Calculate weighted score
    var totalScore = 0;
    for (var question in answers) {
      totalScore += answers[question];
    }

    // Determine result based on weighted score
    var result;
    if (totalScore <= 10) {
      result = "Answer A";
    } else if (totalScore <= 15) {
      result = "Answer B";
    } else if (totalScore <= 20) {
      result = "Answer C";
    } else if (totalScore <= 25) {
      result = "Answer D";
    } else if (totalScore <= 30) {
      result = "Answer E";
    } else if (totalScore <= 35) {
      result = "Answer F";
    }

    // Display result
    var resultContainer = document.getElementById("result");
    resultContainer.textContent = "Your result is: " + result;
  });