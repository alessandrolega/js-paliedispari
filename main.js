// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// PALIDROMA shift alt f

function isPalidroma(parola) {

    let reverse = '';

    for (let i = parola.length - 1; i >= 0; i--) {
        if (reverse == parola) {
            return true;
        } else {
            return false;
        }

    }
    
    
}

let reverse = '';

let parola = prompt('Inserisci una parola');
let palindroma = isPalidroma(parola);

console.log('stringa palindroma ' + reverse);














// PARI E DISPARI 