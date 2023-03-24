const colors = ["#2196f3", "#f44336", "#4caf50", "#ffc107", "#9c27b0", "#00bcd4"];
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});