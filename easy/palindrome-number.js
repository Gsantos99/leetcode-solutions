var isPalindrome = function (x) {
  let num = x;
  let string = num.toString();
  let inver_string = "";

  for (let i = string.length - 1; i >= 0; i--) {
    inver_string += string[i];
  }

  if (string === inver_string) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
