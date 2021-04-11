let fase

window.fases = fase

function menu() {
    corpo = window.document.getElementById('corpo')

    corpo.innerHTML = ''

    corpo.innerHTML += '<input type="number" name="codigodeparada" id="codigo" class="res" placeholder="Codigo de parada" max="9999"><br>'
    corpo.innerHTML += '<br><input type="button" name="salvar" value="Salvar" class="botao" onclick="save()"><br>'
    corpo.innerHTML += '<br><input type="button" name="cancelar" value="Cancelar" class="botao" onclick="canceled()">'
}

function save() {
    let code = window.document.getElementById('codigo').value

    if (code == 9872) {
        window.alert('parada1')
        fase = 2
    } else if (code == 8895) {
        window.alert('parada2')
        fase = 3
    } else if (code == 5698) {
        window.alert('parada3')
        fase = 4
    } else if (code == 6435) {
        window.alert('parada4')
        fase = 5
    } else if (code.length == 0) {
        window.alert('Você não selecionou nenhum codigo de parada')
    } else {
        window.alert('Codigo de parada não encontrado')
    }
}

function canceled() {

}