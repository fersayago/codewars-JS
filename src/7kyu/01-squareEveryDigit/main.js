function squareDigits(num){
  var squaredArray = []
  
  var numArray = num.toString().split("")
  numArray.forEach(function(number){
    var intNumber = parseInt(number)
    var squareNumber = intNumber * intNumber
    squaredArray.push(squareNumber)
  })
  var squaredNum = parseInt(squaredArray.join(""))
  return squaredNum
}

squareDigits(3212)