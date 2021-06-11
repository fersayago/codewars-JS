function getCount(str) {
  var vowelsCount = 0;
  
  str.split("").forEach(function (letter){
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
      vowelsCount++      
    }
  })
  
  return vowelsCount;
}