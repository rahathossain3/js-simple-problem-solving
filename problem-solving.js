// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

/* 
function lowestArrayElement(number) {
    let lowestArray = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element < lowestArray) {
            lowestArray = element;
        }
    }
    return lowestArray;
}
const arrayIs = [45, 87, 98, 2, 89, 101];
const isArrayLowest = lowestArrayElement(arrayIs);
console.log('Loweast Array', isArrayLowest)

 */



// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।

/* 
const num1 = 1105;
const num2 = 258;
const num3 = 300;

if (num1 < num2 && num1 < num3) {
    console.log('num 1 is small ');
}
else if (num2 < num1 && num2 < num3) {
    console.log('num2 is small');
}
else {
    console.log('num3 is small');
}
 */



// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।


function arrayAverageIs(num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    average = sum / num.length;
    return average;

}

const arrayValue = [5, 8, 7, 10, 9, 4, 12];
const arrayAverage = arrayAverageIs(arrayValue);
console.log('Array Average is', arrayAverage);




// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।


/* function recteagularArea(length, hight) {
    var area = length * hight;
    return area;
}
var recteagularLenght = 14;
var recteagularHight = 5;
var racteagularAreaIs = recteagularArea(recteagularLenght, recteagularHight);
console.log(racteagularAreaIs); */





// ৫. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

/* 
var a = 2; var b = 3; if (a < b) { console.log('Hello'); }

function add(a, b) { return a + b; }
var i = add(7, 5);
console.log(i)

function add(a, b) {
    return a + b;
}
console.log(add("adam" + "eve"))
 */
/* var i = 'my ff f';
console.log(i.length); */

/* var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == 'a') {
        count++;
    }
}
console.log(count) */