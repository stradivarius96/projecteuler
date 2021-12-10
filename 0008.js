const fs = require('fs')

console.time('Run Time')

let arr = fs.readFileSync('0008-input.txt').toString().split("").filter(a => a != '\n')

let largest = 0
for (let i = 0 ; i < arr.length - 13; i++){
    if (arr.slice(i,i+13).reduce((pv, cv) => pv * cv, 1) > largest){
        largest = arr.slice(i,i+13).reduce((pv, cv) => pv * cv, 1)
    }
}


console.log("Answer: " + largest)

console.timeEnd('Run Time')