// Factorial de un numero. Se Multiplaca el numero por el antecesor hasta llegar a 1
// 5! = 5 x 4 x 3 x 2 x 1

function factorial(n) {
    let fat =1
    for(let c = n; c > 1; c--) {
        fat = fat * c
    }
    return fat
}
console.log(factorial(5))
