const fs = require('fs')

console.time('Run Time')

let arr = fs.readFileSync('0013-input.txt').toString().split("\n").map(a => parseInt(a))

console.log("Answer: " + arr.reduce((cv, pv) => cv + pv, 0).toString().replace(".", '').slice(0, 10))

console.timeEnd('Run Time')