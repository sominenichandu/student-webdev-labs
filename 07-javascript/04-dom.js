// Exercise 1: Click Event
const userInput1 = document.getElementById("userInput1");
const copyButton = document.getElementById("copy");
const outputDiv = document.querySelector(".output");

copyButton.addEventListener("click", () => {
  outputDiv.textContent = userInput1.value;
});

// Exercise 2: Input Event
const userInput2 = document.getElementById("userInput2");
const inputEventSection = document.getElementById("inputEventExample");

userInput2.addEventListener("input", () => {
  inputEventSection.querySelector("p").textContent = userInput2.value;
});
