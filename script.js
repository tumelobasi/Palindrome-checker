// Set Up Constants
const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// Set Up Event Listener
checkBtn.addEventListener("click", () => {
  const originalInput = userInput.value;

  // Check the length of the original input
  if (originalInput.length === 0) {
    alert(`Please input a value`);
  } else {
    result.innerHTML = ``;
    const resultMsg = `${originalInput} ${isPalindrome(originalInput) ? "is a palindrome" : "is not a palindrome"}.`;
    result.innerHTML = resultMsg;
  }
});

// Function to check if the string is a palindrome
const isPalindrome = (str) => {
  const lowerCaseStr = [...str].filter((c) => /[a-zA-Z0-9]/.test(c)).join('').toLowerCase();
  return lowerCaseStr === [...lowerCaseStr].reverse().join('');
};