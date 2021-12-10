import { isPalindrome } from './utils.js';
console.time('Run Time')

let largest = 0

for (let a = 999; a >= 900; a-- ){
    for (let b = 999; b >= 900; b-- ){
        if (isPalindrome(a*b) && a*b > largest){
            largest = a*b
        }
    }    
}

console.log("Answer: " + largest)

console.timeEnd('Run Time')
