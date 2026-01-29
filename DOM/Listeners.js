const buttons = document.querySelectorAll("button");

//foreach to iterate through each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
