/*
function largestElement(numbers) {
    let largest = numbers[0];               // leargest number বের করার জন্য array এর first index দেওয়া লাগবে
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i]          // element এর মান index পজিশন অনুযায়ী add হবে
        if (element > largest) {            // যদি element এর মান largest থেকে বড় হয় তাহলে if কাজ করবে।
            largest = element;          //largest এর নতুন মান হিসাবে elementেএর মান add হবে
        }
    }
    return largest;         // loop এর বাহিরে দিতে হবে।
}

const ages = [12, 54, 2, 34, 75, 32, 12]
const oldest = largestElement(ages);
const oldest2 = largestElement([-12, -17, -6,]);            // - এর ক্ষেত্রে  সবথেকে ছোটটি ই বড় হবে।
console.log('oldest2', oldest2);

*/

function largestNumber(number1) {
    let largestItem = number1[0];
    for (var i = 0; i < number1.length; i++) {
        const item = number1[i];
        if (item > largestItem) {
            largestItem = item;
        }
    }
    return largestItem;
}

// const people = [45, 87, 52, 11, 25, 2, 9];
const people1 = [-2, -4, -8, -6, -1]
const largestItems = largestNumber(people1);
console.log('largest', largestItems);



// Task: find the lowest element of an array

function lowestNumber(number) {
    let lowest = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

var numbers = [45, 89, 78, 65, 2, 35];
const lowestNumbers = lowestNumber(numbers);
console.log('lowest number ', lowestNumbers);
