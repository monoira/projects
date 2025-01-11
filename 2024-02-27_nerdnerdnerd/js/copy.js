import copy from "copy-to-clipboard";

const textInput = document.querySelector("#text_input");
const textOutput = document.querySelector("#output_section");
const downwardsArrow = document.querySelector("#downwards_arrow");
const copyBtn = document.querySelector("#copy_btn");

/**
 * adds tick animation class to downwardsArrow.
 * animation lasts for hundreds of milliseconds
 * and needs to be cleaned with cleanTickAnimationCssClass
 * before next input for smooth animation
 * @returns {void}
 */
function addTickAnimationCssClass() {
  downwardsArrow.classList.add("tick_animation_class");
}

/**
 * This is to clean animation class INSTANTLY upon typing
 * both this and removeAfterDelay are needed for arrow to
 * work and look good and be functional
 * @returns {void}
 */
function cleanTickAnimationCssClass() {
  downwardsArrow.classList.remove("tick_animation_class");
}

/**
 * removes after delay for cool animation
 * @returns {void}
 */
function removeTickAnimationCssClassAfterDelay() {
  setTimeout(() => {
    downwardsArrow.classList.remove("tick_animation_class");
  }, 100);
}

/**
 * splits text into array, uppercase's every even character, joins into string again and returns it
 * @param {string} text
 * @returns {string}
 */
function nerdifyText(text) {
  return text
    .split("")
    .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char))
    .join("");
}

textInput.addEventListener("input", () => {
  cleanTickAnimationCssClass();
  addTickAnimationCssClass();
  removeTickAnimationCssClassAfterDelay();

  textOutput.textContent = String(nerdifyText(textInput.value));
});

copyBtn.addEventListener("click", () => {
  copy(textOutput.textContent);
});
