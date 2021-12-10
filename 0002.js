console.time('Run Time')

let curr = 2
let prev = 1
let sum = 0

do {
    if (curr % 2 == 0){
        sum += curr
    }

    curr += prev
    prev = curr - prev
} while (curr < 4000000)

console.log("Answer: " + sum)

console.timeEnd('Run Time')