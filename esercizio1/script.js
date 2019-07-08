//1 -Una funzione per capire se la parola è palindroma;

var inserimentoUtente = prompt("Inserisci una parola");

var elemento = document.getElementById('mio_id');

function inversione(str) {

  var split = str.split("");
  console.log(split);

  var rever = split.reverse();
  console.log(rever);

  var newWord = rever.join("");
  console.log(newWord);

  return newWord;
}


var parolaInvertita = inversione(inserimentoUtente);

if (parolaInvertita === inserimentoUtente) {
  elemento.innerHTML = "è palindroma, ovvero: " + inserimentoUtente + " - " + parolaInvertita;
} else {
  elemento.innerHTML = "non è palindroma, perchè: " + inserimentoUtente + " - " + parolaInvertita;
}
