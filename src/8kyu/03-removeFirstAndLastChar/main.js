function removeChar(str){
  let testArr = str.split("")
  slicedStr = testArr.slice(1, -1).join("")
  return slicedStr
};