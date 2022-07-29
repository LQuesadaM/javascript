// Recursividade
function factorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}


console.log(factorial(5))
/*

Factorial
5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!
n! = n * (n-1)!
1! = 1

*/