function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //bom dia
        document.body.style.background = '#e2cd9f'
        img.src = 'manhã.svg'
    }else if (hora >= 12 && hora <= 18){
        document.body.style.background = '#b9846f'
        img.src = 'tarde.svg'
        //boa tarde
    } else {
        img.src = 'noite.svg'
        document.body.style.background = 'rgb(18, 18, 66)'
        //boa noite
    }
        
}