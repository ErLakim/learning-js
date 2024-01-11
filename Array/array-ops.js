
// Example of using a relative path
//const arrayOps = require('./array-ops');

//7const newGroup = group.sort((a,b) => a.age - b.age );
//console.log({newGroup});

// write a program(function) to find the maximum and minimum value of an array.
//[22,1,33,9,55] => {min : 1, max :55 }

//const minMaxFn = ()=>{}
// map, filter, reduce, some, find, every.
// write a fn that accepts an array and return the sum of all items of array
//[1,2,3,4,5,6,7,8,9,10] => 55

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initValue = 0;
const sumAll = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initValue
);
console.log(sumAll);
console.log("hello");
