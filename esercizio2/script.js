// 2 - L’utente sceglie pari o dispari e un numero da 1 a 5.

var sceltaUtente, estrazione1, estrazione2, risultato;
var elemento = document.getElementById('mio_id');

sceltaUtente = prompt("Cosa scegli? pari/dispari");

sceltaUtente.toUpperCase();

function gioco() {
  var numeroEstratto = Math.floor(Math.random() * 5) + 1;
  return numeroEstratto;
}


estrazione1 = gioco();
estrazione2 = gioco();

console.log(estrazione1);
console.log(estrazione2);

function verdetto() {
  var somma = estrazione1 + estrazione2;
  if (somma % 2 === 0) {
    if (sceltaUtente == "pari") {
      elemento.innerHTML = "Hai vinto!!!";
    }else {
      elemento.innerHTML = "Hai perso...";
    }
  } if (somma % 2 != 0) {
      if (sceltaUtente == "dispari") {
        elemento.innerHTML = "Hai vinto!!!";
      }else {
        elemento.innerHTML = "Hai perso...";
      }
  }
}

risultato = verdetto();
