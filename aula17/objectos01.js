let amigo = {
    nombre: 'Luis',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p                        // this hace auto-referencia objeto
    }
}
amigo.engordar(2)
console.log(`${amigo.nombre} pesa ${amigo.peso}kg`)