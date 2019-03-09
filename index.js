const truncateString = (str, num) => {
  // Clear out that junk in your trunk
  if(num < str.length) {
  let newStr = '';
    for(let i = 0; i < num; i++) {
      newStr += str[i]
    }
    newStr += '...'
    return newStr;
  }
  else {
      return str
  }
}

const truncated = truncateString("A-tisket a-tasket A green and yellow basket", 8); 

console.log(truncated)
