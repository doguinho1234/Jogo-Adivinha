// Gera um úmero aleatório de 1 a 20 //
let numeroAleatorio = Math.floor(Math.random() * 20) + 1;

// "let" é uma variável, como o "var", só que ele começou a ser utilizado apartir de 2015 após dúvidas de programadores com o "var" para facilitar o uso de variáveis //

// Número de tentativas de jogo //
let numTentativas = 5;

function play() {
    let numeroAleatorio = Math.floor(Math.random() * 20) + 1;
    // for(inicio, fim, soma/subtração) //
    for (let i = 1; i <= numTentativas; i++) {
     let palpite = parseInt(prompt("tente adivinhar o número (entre 1 e 20):"));
     if (palpite === numeroAleatorio) {
        console.log("Parabéns, você acertou o número em " + i + " tentativas!");
        break;
     }

     let dica = (palpite <numeroAleatorio) ? " maior " : " menor ";
     console.log("Tentativa # " + i + " : O número é " + dica + " do que " + palpite);

     if(i === numTentativas) {
        console.log("Suas tentativas acabaram. O número era " + numeroAleatorio +".");
     }
    }
}