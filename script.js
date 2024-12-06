function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()

    // Mudar a hora é so remover as variaveis de hora e criar uma e colocar a desejada

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = "./images/fotomanha.jpg"
        document.body.style.backgroundColor = 'blue'
    }

    else if (hora >= 12 && hora <= 18) {
        img.src = "./images/fototarde.jpg"
        document.body.style.backgroundColor = 'orange'
    }
    else {
        img.src = "./images/fotonoite.jpg"
        document.body.style.backgroundColor = 'gray'
    }
}