// Arrow Functions exercise
// Question #1

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

//   ES2015 Code 
const double = arr => arr.map(val => vl *2);


// Question #2; Replace all functions with arrow functions 

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

//    Solution 
const  squareAndFindEvens = numbers => numbers.map(val=> val *2). filter(square => square % 2===0)