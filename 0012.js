console.time('Run Time')

let divisors = 0
let i = 1
let tri = 0

while (divisors <= 500){
    tri += i
    i++
    divisors = countDivisors(tri)
}

console.log(tri)

function countDivisors(n)
{
    let count = 0
    for(let i = 1; i <= Math.sqrt(n); i++)
    {
        if (n % i == 0)
        {
            // If divisors are equal, count only one
            if (parseInt(n / i, 10) == i)
                count++         
            // Otherwise count both
            else 
                count += 2
        }
    }
    return count
}

console.timeEnd('Run Time')