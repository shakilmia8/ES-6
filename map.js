// how to declare array value 2*;
const numbers = [4, 6, 7, 9, 3];
const output = [];

// function doubleOld(number){
//     return number*2;
// }

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result);
}
console.log(output);

// 1. loop through each element 
// 2. for each element call the provided function
// 3. result for each element will be stored in an array


// const output2 = numbers.map(doubleIt);
// const output2 = numbers.map(number => number * 2);
const output2 = numbers.map(x => x * 2);
console.log(output2);

const squaree = numbers.map(x => x * x);
console.log(squaree);