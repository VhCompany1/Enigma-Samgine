function indexpage() {
    let corpo = window.document.getElementById('corpo')

    corpo.innerHTML = `
    <img src="midia/img/animation.gif" alt="" class="animation">
    <h1>Seja bem vindo...</h1>

    <img src="midia/img/LogoSamgine.png" alt="">
    <!--<img src="midia/img/morto.png" class="mao">-->

    <br><input type="button" value="Start" onclick="start()" class="botao">

    <br><br><input type="button" value="Config" onclick="menu()" class="botao">

    <!--<br><audio src="midia/audio/She Died Up There You Know - Dan Bodan.mp3" id="trilha" loop controls aria-placeholder="teste"></audio>-->
    `
}