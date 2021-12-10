const utils = require('./utils.js')
console.time('Run Time')

let triplet = 0

let a = 1


while (triplet == 0 & a <= 1000){
    a++
    for (let b = 1; b <= 1000; b++){
        for (let c = 1; c <= 1000; c++){
            if (a+b+c > 1000){
                break
            }
            if (a*a + b*b == c*c && a + b + c == 1000){
                console.log(a + " , " + b + " , " + c)
                triplet = a*b*c
                break
            }
        }

        if (a+b > 1000){
            break
        }
    }
}

console.log("Answer: " + triplet)

console.timeEnd('Run Time')
