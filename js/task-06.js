const validation = document.querySelector("#validation-input");
const addRemoveClass = (remove, add) => {
  validation.classList.remove(`${remove}`);
  validation.classList.add(`${add}`);
};
const validSymbol = (symbol) => {
    console.log(symbol.currentTarget.value.length);
    console.log(Number(validation.dataset.maxlength) === symbol.currentTarget.value.length);
  if (Number(validation.dataset.length) === symbol.currentTarget.value.length) {
    addRemoveClass("invalid", "valid");
  } else {
      addRemoveClass("valid", "invalid");
    }
};
validation.addEventListener("blur", validSymbol);
console.log(validation.textContent);