const btn = document.querySelector("#btn");
btn.onclick = alertFunction;
//btn.onclick = () => alert("Hello World from btn 2");

const button = document.querySelector("#btn2");
button.addEventListener("click", alertFunction);
//button.addEventListener("click", () => {
// alert("Hello World from the south");});

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const button3 = document.querySelector("#btn3");
button3.addEventListener("click", function (e) {
  console.log(e.target);
});
