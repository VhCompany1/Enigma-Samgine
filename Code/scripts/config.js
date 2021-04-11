function menu() {
    let corpo = window.document.getElementById('corpo')

    corpo.innerHTML = ''

    corpo.innerHTML = '<center><div class="config"></div></center>'

    let div = window.document.querySelector('.config')

    div.innerHTML = '<h1>CONFIGURAÇÕES</h1>'

    div.innerHTML += '<br><input type="number" name="codigodeparada" id="codigo" class="res" placeholder="Codigo de parada" max="9999"><br>'

    div.innerHTML += '<h2>Fonte</h2>'
    div.innerHTML += '<br>Normal: <input type="radio" name="font" id="fnormal" checked>'
    div.innerHTML += '<br>Adaptavel: <input type="radio" name="font" id="fadaptavel"><br>'

    div.innerHTML += '<br><input type="button" name="salvar" value="Salvar" class="botao" onclick="save()"><br>'
    div.innerHTML += '<br><input type="button" name="cancelar" value="Cancelar" class="botao" onclick="canceled()">'
}

function save() {

    //codigo de parada
    let code = window.document.getElementById('codigo').value

    if (code == 'as not') {
        window.alert('parada1')
        window.fase = 2
        start()
    } else if (code == 'as not') {
        window.alert('parada2')
        window.fase = 3
        start()
    } else if (code == 'as not') {
        window.alert('parada3')
        window.fase = 4
        start()
    } else if (code == 'as not') {
        window.alert('parada4')
        window.fase = 5
        start()
    } else if (code.length == 0) {
        let nselect = 1
    } else {
        window.alert('Codigo de parada ainda não disponivel')
    }

    //fonte edit
    let fcaixa1 = window.document.getElementById('fnormal')
    let fcaixa2 = window.document.getElementById('fadaptavel')

    if (fcaixa1.checked == true) {
        window.fonte.gb = 'no'
        fonte()
    } else if (fcaixa2.checked == true) {
        window.fonte.gb = 'ad'
        fonte()
    } else {
        window.alert('nada')
    }

    indexpage()
}

function canceled() {
    indexpage()
}