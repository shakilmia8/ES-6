// 1. let and const used
const hubby = 'Omor Sani';
let phone = 'iphone 15';
phone = 'Samsung Galaxy S17';

// 2 default parameter
// 5 spread or three dot (...)
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
};
const biggest = maxNumber();
console.log(biggest);


// 3. template string 
const myNotes = `I am mojnu of ${hubby}. I have a ${phone}.`

// 4. arrow function
// function square(x) {
//     return x * x;
// }
const square = x => x * x;
console.log(square(8));