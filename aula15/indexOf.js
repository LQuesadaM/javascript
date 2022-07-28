let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O array tem ${num.length} posições`)
console.log(`O primeiro valor do array é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('El número no existe')
} else {
    console.log(`O valor 4 esta na posição ${pos}`)
}
