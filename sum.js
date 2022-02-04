const numbers = [44, 23, 34, 32, 54, 5, 78];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}
console.log(sum);

// using function 

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal([32, 45, 67]);
console.log(total);






// my try

// var arr = [15, 15, 88, 8];
// for (var i = 0; i < arr.length; i++) {
//     var y = arr[i];
//     console.log(y);
// }