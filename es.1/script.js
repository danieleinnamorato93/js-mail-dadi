//Preparazione
console.log('JS OK')
let result = null;

//genero lanci
const rollPlayer = Math.floor(Math.random() *20 ) +1 ;
const rollCpu = Math.floor(Math.random() *20 ) +1 ;

//mostro in console
document.getElementById("player").innerHTML = `Lancio player 1: ${rollPlayer}`;
document.getElementById("cpu").innerHTML = `Lancio Cpu: ${rollCpu}`;

//Stabilisco il vincitore e lo mostro in console
if(rollPlayer > rollCpu) {
    result = "Congratulazioni, hai vinto!";
} else if(rollPlayer < rollCpu) {
    result = "Hai perso! Ritenta, sarai più fortunato!";
} else {
    result = "Pari!";
}
console.log('result' ,  result)