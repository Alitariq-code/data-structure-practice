// What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//     let a = 10;
//     a = 50 + 3;
  
//     for (let i = 0; i < input.length; i++) {
//       anotherFunction();
//       let stranger = true;
//       a++;
//     }
//     return a;
//   }

function boooo(n) {
  for (let i = 0; i < n; i++) {
      console.log('booooo');
  }
}

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
      hiArray[i] = 'hi';
  }
  return hiArray;
}

console.log(arrayOfHiNTimes(6))