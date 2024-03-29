function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return false; 
    return num > 1;
}

function isPalindrome(num){
    return num == parseInt(num.toString().split('').reverse().join(''))
}

module.exports = {
    isPrime,
    isPalindrome
}