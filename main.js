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

function wordInput () {

    let input = prompt("Inserisci una parola");
    let wordReverse = " ";
    let wordNormal = " ";

    for (let i = input.length - 1; i >= 0; i-- ){

        wordReverse += input[i]; 

    }
    console.log( `${wordReverse}` );

    for ( let x = 0; x < input.length; x++ ){

        wordNormal += input[x];
        
    }
    console.log( `${wordNormal}` );

    if ( wordReverse == wordNormal ) {
        document.getElementById("text").innerHTML = `La parola ${input} è palindroma` 
    } else {
        document.getElementById("text").innerHTML = `La parola ${input} non è palindroma` 
    }
}

wordInput ( "input" );


// PARI E DISPARI 