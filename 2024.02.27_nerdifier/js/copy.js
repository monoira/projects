import copy from "copy-to-clipboard";

const textInput = document.querySelector("#text_input");
const downwardsArrow = document.querySelector("#downwards_arrow");
const textOutput = document.querySelector("#output_section");
const copyBtn = document.querySelector("#copy_btn");

function addClass() {
  downwardsArrow.classList.add("tick_animation_class");
}

function removeClassAfterDelay() {
  setTimeout(() => {
    downwardsArrow.classList.remove("tick_animation_class");
  }, 100);
}

function removeClass() {
  downwardsArrow.classList.remove("tick_animation_class");
}

function nerdify(text) {
  return text
    .split("")
    .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char))
    .join("");
}

textInput.addEventListener("input", () => {
  removeClass();
  addClass();
  removeClassAfterDelay();

  textOutput.textContent = String(nerdify(textInput.value));
});

copyBtn.addEventListener("click", () => {
  copy(textOutput.textContent);
});
