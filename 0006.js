console.time('Run Time')

let sumSquare = 0
let squareSum = 0

for (let i = 1; i <= 100; i++){
    sumSquare += i * i 
    squareSum += i
}


console.log("Answer: " + (squareSum*squareSum - sumSquare))

console.timeEnd('Run Time')
