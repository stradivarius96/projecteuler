const utils = require('./utils.js')

console.time('Run Time')

let primes = [2]

for (let i = 3; i < 10000; i += 2){
    if (utils.isPrime(i)){
        primes.push(i)
    }
}

let idx = primes.length - 1
while (600851475143 % primes[idx] != 0){
    idx --
}
console.log("Answer: " + primes[idx])

console.timeEnd('Run Time')