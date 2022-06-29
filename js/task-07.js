const selectFontSizeEl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
selectFontSizeEl.setAttribute("value", "16");
selectFontSizeEl.addEventListener("input",
    handSelectFontSize);
    
function handSelectFontSize() {
    const fontSize = selectFontSizeEl.value;
    spanText.style.fontSize = `${fontSize}px`;
    console.log(spanText.style.fontSize);
}
