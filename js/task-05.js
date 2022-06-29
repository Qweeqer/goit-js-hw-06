// let input = document.querySelector("#name-input");
// let nameOutput = document.querySelector("#name-output");

// input.oninput = function () {
//     if (input.value === '') {
//        nameOutput.innerHTML = 'Anonymous';
//     } else{
//     nameOutput.innerHTML = input.value;
//     }
// }
// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});