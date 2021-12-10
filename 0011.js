const fs = require('fs')

console.time('Run Time')

let arr = fs.readFileSync('0011-input.txt').toString().split("\n").map(row => row.split(" ").map(num => parseInt(num)))

// console.log(arr)

let largest = 0
// if we start in upper left and check down, to right, and downward diags, we will capture all 
for (let x = 0; x < 20; x++){
    for (let y = 0; y < 20; y++){
        // check down
        if (y + 3 < 20){
            if (arr[x][y]*arr[x][y+1]*arr[x][y+2]*arr[x][y+3] > largest){
                largest = arr[x][y]*arr[x][y+1]*arr[x][y+2]*arr[x][y+3] 
            }
        }
        // check right
        if (x + 3 < 20){
            if (arr[x][y]*arr[x+1][y]*arr[x+2][y]*arr[x+3][y] > largest){
                largest = arr[x][y]*arr[x+1][y]*arr[x+2][y]*arr[x+3][y] 
            }
        }
        // check down right
        if (x + 3 < 20 && y + 3 < 20){
            if (arr[x][y]*arr[x+1][y+1]*arr[x+2][y+2]*arr[x+3][y+3] > largest){
                    largest = arr[x][y]*arr[x+1][y+1]*arr[x+2][y+2]*arr[x+3][y+3]
                }
            }

        // check down left
        if (x - 3 >= 0 && y + 3 < 20){
            if (arr[x][y]*arr[x-1][y+1]*arr[x-2][y+2]*arr[x-3][y+3] > largest){
                largest = arr[x][y]*arr[x-1][y+1]*arr[x-2][y+2]*arr[x-3][y+3]
            }
        }

    }
}
// let largest = 0
// for (let i = 0 ; i < arr.length - 13; i++){
//     if (arr.slice(i,i+13).reduce((pv, cv) => pv * cv, 1) > largest){
//         largest = arr.slice(i,i+13).reduce((pv, cv) => pv * cv, 1)
//     }
// }


console.log("Answer: " + largest)

console.timeEnd('Run Time')