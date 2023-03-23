const buttons = document.querySelectorAll(".my-button");

let counters = [];
buttons.forEach(function(button, index) {
  counters[index] = 0;
  button.innerText = counters[index];
  
  button.addEventListener("click", function() {
    counters[index]++;
    button.innerText = counters[index];
  });
});
