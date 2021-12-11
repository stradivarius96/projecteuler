const fs = require('fs')

console.time('Run Time')

let arr = fs.readFileSync('0013-input.txt').toString().split("\n").map(a => parseInt(a))

console.log(arr)
// let largest = 0
// for (let i = 0 ; i < arr.length - 13; i++){
//     if (arr.slice(i,i+13).reduce((pv, cv) => pv * cv, 1) > largest){
//         largest = arr.slice(i,i+13).reduce((pv, cv) => pv * cv, 1)
//     }
// }


 console.log("Answer: " + arr.reduce((cv,pv) => cv+pv, 0).toString().replace(".",'').slice(0,10))

console.timeEnd('Run Time')