function spinWords(string){
  var reversedArray = []
  
  var splitString = string.split(" ")
  splitString.forEach(function(word){
    if (word.length >= 5) {
      var arrayWord = word.split("")
      var reversedArrayWord = arrayWord.reverse()
      var reversedWord = reversedArrayWord.join("")
      reversedArray.push(reversedWord)
    } else {
      reversedArray.push(word)
    }
  })
  var reversedString = reversedArray.join(" ")
  return reversedString
}