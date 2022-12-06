const mario = document.querySelector("#mario");
const pipe = document.querySelector("#pipe");
const clouds = document.querySelector("#clouds");
const endGameBox = document.querySelector("#end-game-conteiner");
const pontuacao = document.querySelector(".pontuacao");
let musica = document.querySelector("#musica-mario");  
let contador = 0;

//FUNCTIONS//

function jump() {

    mario.classList.add("jump");
    let audioPulo = document.querySelector("#pulo-mario");

    audioPulo.play();

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 600);
}

function game() {

    setInterval(() => {
        
        let pipePosition = pipe.offsetLeft;
        let cloudsPosition = clouds.offsetLeft;
        let marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    
        if(pipePosition <= 70 && marioPosition < 115 && pipePosition > 0) {
            
            pipe.setAttribute("style", "animation: none");
            pipe.style.left = `${pipePosition}px`; 
            clouds.setAttribute("style", "animation: none");
            clouds.style.left = `${cloudsPosition}px`;
           
            mario.style.bottom = `${marioPosition}px`;
            mario.setAttribute("src", "/img/marioMorto.gif");
            mario.style.width = "3.3rem"
            mario.style.marginLeft = "20px"

            musica.remove();
            gameOver();
            playAudioMorte();
        } else {
            contador = contador + 1;
        }

    }, 2);

    musica.play();
}

function gameOver() {

    mario.classList.add("endGame");

    pontuacao.textContent = contador;

    setTimeout(() => {
        endGameBox.classList.remove("hide");
        endGameBox.classList.add("hide-animation");
    }, 2000);

    
}

function musicaMario() {
    let musica = document.querySelector("#musica-mario");  

    musica.play();
}

function playAudioMorte() {
    
    let audio = document.querySelector("#morte-mario");

    audio.play();

    setTimeout(() => {
       audio.remove(); 
    }, 3000);
}

//EVENTS//

document.addEventListener("keydown", jump);

game();
