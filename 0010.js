const utils = require('./utils.js')

console.time('Run Time')

let primeSum = 2

for (let i = 3; i < 2000000; i += 2){
    if (utils.isPrime(i)){
        primeSum += i
    }
}

console.log("Answer: " + primeSum)

console.timeEnd('Run Time')