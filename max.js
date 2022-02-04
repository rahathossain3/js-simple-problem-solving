const business = 1650;
const minister = 550;
const army = 600;

// if (business > minister) {
//     console.log("bUsness Parson er pola is bigeer")
// }
// else {
//     console.log('minister er polo is bigger');
// }

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

const largest = findLargest(154, 241);
console.log("largest is ", largest)


// compare 3

/*
if (business > minister && business > army) {
    console.log('   business is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger')
}
else {
    console.log('amry is bigger');
} */


// Task 1 : create a function three numbers as input Parameter and returns you the largest number of the three

function findlargestnumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
const largestNumber = findlargestnumber(158, 897, 965);
console.log('the largest number is ', largestNumber);



var max = Math.max(business, minister, army);
// console.log(" the largest number is", max);


// Task 2 : WWrite a function to find the smallest fo three numbers

function findSmallestNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}
var smallestNumber = findSmallestNumber(581, 5800, 781);
console.log('Smallest Number is', smallestNumber);