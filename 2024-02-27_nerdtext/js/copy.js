import copy from "copy-to-clipboard";

const textInput = document.querySelector("#text_input");
const textOutput = document.querySelector("#output_section");
const downwardsArrow = document.querySelector("#downwards_arrow");
const copyBtn = document.querySelector("#copy_btn");

function addTickAnimationClass() {
  downwardsArrow.classList.add("tick_animation_class");
}

// NOTE: this is to clean animation class INSTANTLY upon typing.
// Need both remove and removeAfterDelay for arrow to work and look good
function removeTickAnimationClass() {
  downwardsArrow.classList.remove("tick_animation_class");
}

function removeTickAnimationClassAfterDelay() {
  setTimeout(() => {
    downwardsArrow.classList.remove("tick_animation_class");
  }, 100);
}

function nerdifyText(text) {
  return text
    .split("")
    .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char))
    .join("");
}

textInput.addEventListener("input", () => {
  removeTickAnimationClass();
  addTickAnimationClass();
  removeTickAnimationClassAfterDelay();

  textOutput.textContent = String(nerdifyText(textInput.value));
});

copyBtn.addEventListener("click", () => {
  copy(textOutput.textContent);
});
