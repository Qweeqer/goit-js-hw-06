const validation = document.querySelector("#validation-input");
const addRemoveClass = (remove, add) => {
  validation.classList.remove(`${remove}`);
  validation.classList.add(`${add}`);
};
const validNumber = (num) => {
  if (Number(validation.dataset.length) === num.currentTarget.value.length) {
    addRemoveClass("invalid", "valid");
  } else {
    addRemoveClass("valid", "invalid");
  }
};
validation.addEventListener("blur", validNumber);