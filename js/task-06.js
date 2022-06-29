const validation = document.querySelector("#validation-input");
const addRemoveClass = (remove, add) => {
  validation.classList.remove(`${remove}`);
  validation.classList.add(`${add}`);
};
const validSymbol = (symbol) => {
  if (Number(validation.dataset.length) === symbol.currentTarget.value.length) {
    addRemoveClass("invalid", "valid");
  } else {
    addRemoveClass("valid", "invalid");
  }
};
validation.addEventListener("blur", validSymbol);
console.log(validation);