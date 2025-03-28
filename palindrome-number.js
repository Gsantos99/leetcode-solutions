// SOLUTION 1
// casting: number -> string
// Inverte a string e checa se ela é igual a string normal

// Space complexity - O(1)
// Time complexity -  O(n)

var isPalindrome = function (x) {
  let num = x
  let string = num.toString()
  let inver_string = ''

  for (let i = string.length - 1; i >= 0; i--) {
    inver_string += string[i]
  }
  
  if(string === inver_string) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome(121));
