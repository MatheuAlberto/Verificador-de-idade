var verificar = window.document.getElementById('verificar')
verificar.addEventListener('click', verific)

function verific() {
    var data = new Date()
    var ano = data.getFullYear()

    // Pega as informações que o usuario digitou no input 
    var form_ano = window.document.getElementById('anoo')
    // var s = Number(form_ano.value) "caso quisse colocar diretamente no if"

    var resultado = window.document.getElementsByTagName('p')[2]

    if (Number(form_ano.value) == 0 || Number(form_ano.value) > ano || Number(form_ano.value) < 0) {
        window.alert('[Erro] Verifique se o dado preenchido está correto e tente novamente')
    } else {
        // Isso irá selecionar os 2 input, veja que não destinei qual deles irei usar '[0] ou [1]
        var sexo = window.document.getElementsByName('sex')

        var idade = ano - Number(form_ano.value)

        var fotografia = window.document.getElementById('foto')

        if (sexo[0].checked) {
            var genero = 'homem'
            if (idade <= 4) {
                fotografia.style.display = 'block'
                fotografia.style.backgroundImage = 'url(./imgs/bebe.jpg)'
            } else if (idade <= 11) {
                fotografia.style.display = 'block'
                fotografia.style.backgroundImage = 'url(./imgs/homem_criança.jpg)'
            } else if (idade <= 17) {
                fotografia.style.display = 'block'
                fotografia.style.backgroundImage = 'url(./imgs/homem_jovem.jpg)'
            } else if (idade <= 60) {
                fotografia.style.display = 'block'
                fotografia.style.backgroundImage = 'url(./imgs/homem_adulto.jpg)'
                fotografia.style.backgroundPosition = 'top'
            } else {
                fotografia.style.display = 'block'
                fotografia.style.backgroundImage = 'url(./imgs/homem_velho.jpg)'
            }
        } else if (sexo[1].checked) {
            var genero = 'mulher'
            if (idade <= 4) {
                fotografia.style.display = 'block'
                fotografia.style.backgroundImage = 'url(./imgs/bebe.jpg)'
            } else if (idade <= 11) {
                fotografia.style.display = 'block'
                fotografia.style.backgroundImage = 'url(./imgs/criança_mulher.jpg)'
            } else if (idade <= 17) {
                fotografia.style.display = 'block'
                fotografia.style.backgroundImage = 'url(./imgs/mulher_jovem.jpg)'
            } else if (idade <= 60) {
                fotografia.style.display = 'block'
                fotografia.style.backgroundImage = 'url(./imgs/mulher_adulta.jpg)'
            } else {
                fotografia.style.display = 'block'
                fotografia.style.backgroundImage = 'url(./imgs/mulher_velha.jpg)'
            }

        }

        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }

}