const utils = require('./utils.js')

console.time('Run Time')

let primeCount = 1
let i = 1

while (primeCount <= 10000){
    i += 2
    if (utils.isPrime(i)){
        primeCount++
    }
}

console.log("Answer: " + i)

console.timeEnd('Run Time')