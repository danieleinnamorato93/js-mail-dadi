console.log('JS OK')
let result = null;


const rollPlayer = Math.floor(Math.random() *20 ) +1 ;
const rollCpu = Math.floor(Math.random() *20 ) +1 ;

document.getElementById("player").innerHTML = `Lancio player 1: ${rollPlayer}`;
document.getElementById("cpu").innerHTML = `Lancio Cpu: ${rollCpu}`;