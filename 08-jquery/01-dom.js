let userInput1 = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output1 = document.querySelector("#output1");

copy.addEventListener("click", handleClick);

function handleClick(event) {
  console.log("click event", event);
  output1.textContent = userInput1.value;
}

let userInput2 = document.querySelector("#userInput2");
let output2 = document.querySelector("#output2");

userInput2.addEventListener("input", handleInput);

function handleInput(event) {
  console.log("input event", event);
  output2.textContent = userInput2.value;
}

$("#copy").on("click", function () {
  console.log("jQuery click event");
  $("#output1").text($("#userInput1").val());
});

$("#userInput2").on("input", function () {
  console.log("jQuery input event");
  $("#output2").text($(this).val());
});
