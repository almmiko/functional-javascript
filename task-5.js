/*# Task

Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

## Example

    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

    console.log(countWords(inputWords))

    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }

## Arguments

  * inputWords: An array of random Strings.*/


function countWords(inputWords) {

  return inputWords.reduce(function(prev,next){
      prev[next] = (prev[next] + 1) || 1;
      return prev;
  },{});

  // var obj = {};
  // inputWords.forEach(function(el){
  //   obj[el] = (obj[el] + 1) || 1;
  // });
  // return obj;
}

module.exports = countWords
