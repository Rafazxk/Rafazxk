let pc = document.getElementById('jgdPc');
let player = document.getElementById('jgdPlayer');
let resultado = document.getElementById('resultado')
let contPc = document.getElementById('contador_pc')

let contador = 0;
let playerChoice = ""; 


document.getElementById('pedra').addEventListener('click', function() {
  playerChoice = "pedra";
  player.innerHTML = playerChoice;
  verificarResultado();
  chama()
});

document.getElementById('tesoura').addEventListener('click', function() {
  playerChoice = "tesoura";
  player.innerHTML = playerChoice;
  verificarResultado();
  chama()
});

document.getElementById('papel').addEventListener('click', function() {
  playerChoice = "papel";
  player.innerHTML = playerChoice;
  verificarResultado();
  chama();
});
let rdm = Math.floor(Math.random() * 3);

function chama() {
  if (rdm === 0) {
    pc.innerHTML = "pedra";
  } else if (rdm === 1) {
    pc.innerHTML = "papel";
  } else {
    pc.innerHTML = "tesoura";
  }
}

// Função para verificar o resultado
function verificarResultado() {

  let pcChoice = pc.innerHTML;
//pedra 
  if (rdm === 0 && playerChoice === "pedra") {
    resultado.innerHTML = "empate";
  }
  else if(rdm === 0 && playerChoice === "tesoura"){
    resultado.innerHTML = "pc venceu!"
    
  }
  else if(rdm === 0 && playerChoice === "papel"){
    resultado.innerHTML = "jogador venceu!"
  }
  //papel
  else if (rdm === 1 && playerChoice === "pedra") {
    resultado.innerHTML = "pc venceu!";
  }
  else if(rdm === 1 && playerChoice === "tesoura"){
    resultado.innerHTML = "jogador venceu"
  }
  else if(rdm === 1 && playerChoice === "papel"){
    resultado.innerHTML = "empate"
  }
  //tesoura
  else if (rdm === 2 && playerChoice === "pedra") {
    resultado.innerHTML = "jogador venceu!";
  }
  else if(rdm === 2 && playerChoice === "tesoura"){
    resultado.innerHTML = "empate"
  }
  else if(rdm === 2 && playerChoice === "papel"){
    resultado.innerHTML = "pc venceu"
  }
}
/*function contador(){
  
}
function reset() {

}
*/