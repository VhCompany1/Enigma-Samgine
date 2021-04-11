let rodada

if (window.fases == undefined) {
    rodada = 1
} else {
    rodada = window.fases
}

function rodadas() {
    let r = window.document.getElementById('res').value.toUpperCase()
    let corpo = window.document.getElementById('corpo')
    let title = window.document.querySelector('title')

    let respostas = window.r

    if (rodada == 1) {
        if (r == respostas[rodada]) {
            window.alert('Muito bem..')

            rodada++
        } else {
            window.alert('Você errou 1')
        }
    }

    if (rodada == 2) {
        title.innerHTML = 'Fase 2'

        corpo.innerHTML = ''



        corpo.innerHTML = '<h1>Ainda estamos te testando...</h1>'
        corpo.innerHTML += '-23.362018, -47.484706<br>'
        corpo.innerHTML += '<br><input type="text" name="" id="res" class="res" placeholder="Resposta...">'
        corpo.innerHTML += '<br><br><input type="button" value="Responder" onclick="rodadas()" class="botao">'

        if (r == respostas[rodada]) {
            window.alert('Você ja esta quase pronto para o verdadeiro desafio...')

            rodada++

        } else if (r != respostas[rodada] && r != respostas[rodada - 1]) {
            window.alert('Você errou')
        }
    }

    if (rodada == 3) {
        title.innerHTML = 'Fase 3'

        corpo.innerHTML = ''

        corpo.innerHTML = '<h1>Você esta indo bem.</h1>'
        corpo.innerHTML += '.---- ..--- .---- ..--- ..--- .----<br>'
        corpo.innerHTML += '<br><input type="text" name="" id="res" class="res" placeholder="Resposta...">'
        corpo.innerHTML += '<br><br><input type="button" value="Responder" onclick="rodadas()" class="botao">'

        if (r == respostas[rodada]) {
            window.alert('Você ja esta pronto?!')

            rodada++


        } else if (r != respostas[rodada] && r != respostas[rodada - 1]) {
            window.alert('Você erro')
        }
    }

    if (rodada == 4) {
        title.innerHTML = 'Fase 4'

        corpo.innerHTML = ''

        corpo.innerHTML = '<h1>Agora sim podemos começar!!!</h1>'
        corpo.innerHTML += '<h2>Gosto de codigos binarios</h2>'

        corpo.innerHTML += '<img src="https://image.freepik.com/fotos-gratis/casa-de-madeira-de-verao-em-um-bosque-de-betulas-acampar-na-floresta-construcao-ecologica_100727-992.jpg" alt="apenas uma imagem">'
        corpo.innerHTML += '<br><input type="text" name="" id="res" class="res" placeholder="Resposta...">'
        corpo.innerHTML += '<br><br><input type="button" value="Responder" onclick="rodadas()" class="botao">'

        if (r == respostas[rodada]) {
            window.alert('Você gosta de musicas')

            rodada++
        } else if (r != respostas[rodada] && r != respostas[rodada - 1]) {
            window.alert('Você erro')
        }
    }

    if (rodada == 5) {
        title.innerHTML = 'Fase 5'

        corpo.innerHTML = ''

        corpo.innerHTML = '<h1>Escuta uma musica comigo</h1>'

        corpo.innerHTML += '<audio src="https://cdn.discordapp.com/attachments/825951876725866517/830306927312896040/codigomorse.wav" controls></audio>'
        corpo.innerHTML += '<br><input type="text" name="" id="res" class="res" placeholder="Resposta...">'
        corpo.innerHTML += '<br><br><input type="button" value="Responder" onclick="rodadas()" class="botao">'

        if (r == respostas[rodada]) {
            window.alert('Você é atencioso?')

            rodada++
        } else if (r != respostas[rodada] && r != respostas[rodada - 1]) {
            window.alert('Você erro')
        }
    }

    if (rodada == 6) {
        title.innerHTML = 'Fase 9'

        corpo.innerHTML = ''

        corpo.innerHTML = '<h1>Algo esta errado</h1>'

        corpo.innerHTML += '(albert einstein * x) + 54'
        corpo.innerHTML += '<br><input type="text" name="" id="res" class="res" placeholder="Resposta...">'
        corpo.innerHTML += '<br><br><input type="button" value="Responder" onclick="rodadas()" class="botao">'

        if (r == respostas[rodada]) {
            window.alert('Você gosta de datas?')

            rodada++
        } else if (r != respostas[rodada] && r != respostas[rodada - 1]) {
            window.alert('Você erro')
        }
    }

    if (rodada == 7) {
        title.innerHTML = 'Fase 7'

        corpo.innerHTML = ''

        corpo.innerHTML = '<h1>1958</h1>'

        corpo.innerHTML += '(albert einstein * x) + 54'
        corpo.innerHTML += '<br><input type="text" name="" id="res" class="res" placeholder="Resposta...">'
        corpo.innerHTML += '<br><br><input type="button" value="Responder" onclick="rodadas()" class="botao">'

        corpo.innerHTML += '<br><escondido>Eu gosto de jogar</escondido>'

        if (r == respostas[rodada]) {
            window.alert('Você é atencioso?')

            rodada++
        } else if (r != respostas[rodada] && r != respostas[rodada - 1]) {
            window.alert('Você erro')
        }
    }
}