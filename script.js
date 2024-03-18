const inputEl = document.getElementById("text-input");
const buttonEl = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

buttonEl.addEventListener("click", () => {
  let inputValue = document.getElementById("text-input").value;
  if (inputValue === "") {
    alert("Please input a value");
  }
  if (isPalindrome(inputValue)) {
    resultDiv.textContent = `${inputValue} is a palindrome`;
  } else {
    resultDiv.textContent = `${inputValue} is not a palindrome`;
  }
});

function isPalindrome(word) {
  const newWord = removeNonAlphanumeric(word);
  console.log(newWord);
  const wordReverse = newWord.split("").reverse().join("");
  if (newWord.toLowerCase() === wordReverse.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

function removeNonAlphanumeric(str) {
  // Use a regular expression to remove all non-alphanumeric characters
  return str.replace(/[^a-zA-Z0-9]/g, "");
}
