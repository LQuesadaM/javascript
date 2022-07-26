function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        // Create img com id=foto
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 
        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', './imagems/bebe-man.png')
            } else if (idade < 21) {
                img.setAttribute('src', './imagems/jovem-man.png')
            } else if (idade < 50) {
                img.setAttribute('src', './imagems/adulto-man.png')
            } else {
                img.setAttribute('src', './imagems/idoso-man.png')
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', './imagems/bebe-wom.png')
            } else if (idade < 21) {
                img.setAttribute('src', './imagems/jovem-wom.png')
            } else if (idade < 50) {
                img.setAttribute('src', './imagems/adulto-wom.png')
            } else {
                img.setAttribute('src', './imagems/idoso-wom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}