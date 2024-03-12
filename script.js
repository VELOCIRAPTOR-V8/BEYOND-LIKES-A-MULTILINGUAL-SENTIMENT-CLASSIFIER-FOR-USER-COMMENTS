document.getElementById("videoUrl").addEventListener("input", function () {
  document.getElementById("clearIcon").style.display = this.value
    ? "inline"
    : "none";
});

function clearInput() {
  document.getElementById("videoUrl").value = "";
  document.getElementById("clearIcon").style.display = "none";
}

function analyzeVideo() {
  // Replace the following with your logic to fetch and analyze the video
  // For demonstration purposes, random scores are used
  document.getElementById("videoScore").textContent = Math.random().toFixed(2);
  document.getElementById("positiveSentiment").textContent =
    Math.random().toFixed(2);
  document.getElementById("negativeSentiment").textContent =
    Math.random().toFixed(2);

  // Replace the following with your logic to generate the pie chart
  // For demonstration purposes, a placeholder text is used
  document.getElementById("pieChart").textContent =
    "Pie chart will be displayed here";
}
