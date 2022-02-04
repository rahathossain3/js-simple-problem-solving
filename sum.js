
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





function arrayresult(number) {
    let sum1 = 0;
    for (var i = 0; i < number.length; i++) {
        var total = number[i];
        sum1 = sum1 + total;
    }
    return sum1;
}

const arrayTotal1 = arrayresult([45, 45, 21, 3, 15]);
console.log(arrayTotal1);



// my try

// var arr = [15, 15, 88, 8];
// for (var i = 0; i < arr.length; i++) {
//     var y = arr[i];
//     console.log(y);
// }