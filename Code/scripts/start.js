function start() {
    let corpo = window.document.getElementById('corpo')
    let cabeca = window.document.getElementById('cabeca')

    let title = window.document.querySelector('title')

    title.innerHTML = 'Fase 1'

    corpo.innerHTML = ''

    corpo.innerHTML = '<h1>Estamos apenas começando...</h1>'
    corpo.innerHTML += '<img src="../midia/img/bandeiracanada.png" alt="Bandeira do canada">'
    corpo.innerHTML += '<br><input type="text" name="" id="res" class="res" placeholder="Resposta...">'
    corpo.innerHTML += '<br><br><input type="button" value="Responder" onclick="rodadas()" class="botao">'
}