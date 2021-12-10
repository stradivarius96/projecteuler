console.time('Run Time')

let smallest = 0
let i = 0

while (smallest == 0){

    // increment by up to 10 by smallest primes to get there faster
    i += 2520 * 11 * 13 * 17 * 19
    if (i % 12 == 0 && i % 14 == 0 && i % 15 == 0 && i % 16 == 0 && i % 18 == 0 && i % 20 == 0){
        smallest = i
    }
}
console.log("Answer: " + smallest)

console.timeEnd('Run Time')
