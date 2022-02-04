// 1, 2, 3, 4, 5, 6, 7  //সমন্তরিক ধারা
// 1, 3, 5, 7, 9   // সমন্তরিক ধারা

// 0, 1, 1, 2, 3, 5, 8, 13, 21  //  Fibonacci (ফিবোনাচ্চি)

/*
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 6th
16th = 15th + 14th
119th = 118th + 117th
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th
*/
//----------------------fibonacci code sentex------------

/*
const fibo = [0, 1];                      // common
for (let i = 2; i <= 10; i++) {                         // always i = 2  is for fibonacci
    // nth = (n-1)th + (n-2)th
    // ith = (i-1)th + (i-2)th
    fibo[i] = fibo[i - 1] + fibo[i - 2];

}
console.log(fibo);

*/

//---------fibonacci for first  10th  number (own practics)
/* 
const fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
    //ith = [i-1]th + [i-2]th
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log('fibonacci', fibonacci); 
*/

