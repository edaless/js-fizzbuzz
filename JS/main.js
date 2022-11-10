// FizzBuzz nome repo: js-fizzbuzz
// Consegna:
// Scrivi un programma che 

// stampi in console i numeri da 1 a 100, 

// ma che per i multipli di 3 stampi “Fizz” 

// al posto del numero e per i multipli di 5 stampi “Buzz”.

// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno: :cuoco:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
// BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:


const primoNumero = 1;
// const ultimoNumero = 10;
// const ultimoNumero = 100;
// const ultimoNumero = 255 * 6;
const ultimoNumero = prompt("quante tessere vuoi? Consiglio " + 255 * 6 );
let outPut;




// variabili colori
let r;
let g;
let b;

const contenitore = document.querySelector(".container");


// ciclo che aumenta l'index e aggiunge un'eventuale div
for(let i = primoNumero; i <= ultimoNumero; i++){ 

    if(((i % 3) === 0) && ((i % 5) === 0)){
        outPut = "FizzBuzz";

    }else if((i % 5) === 0){
        outPut = "Buzz";        

    }else if(((i % 3) === 0)){
        outPut = "Fizz";        

    }else{
        outPut = i;

    }    
    
    console.log(outPut);

    // creo div nel document
    const div = document.createElement("div");
    // gli inserisco l'output
    div.append(outPut);
    // gli aggiungo la classe tessera
    div.classList.add("tessera");

    

    // cambio colori!!!
    // aumenta g
    if ( i <= 255 ){
        r = 255;
        g = i;
        b = 0;
    }
    // diminuisce r
    if ( i > 255 && i <= (255 * 2) ){
        r = (255 * 2) - i;
        g = 255;
        b = 0;
    }
    // aumenta b
    if ( i > (255 * 2)  && i <= (255 * 3) ){
        r = 0;
        g = 255;
        b = i - (255 * 2);
    }
    // diminuisce g
    if ( i > (255 * 3)  && i <= (255 * 4) ){
        r = 0;
        g = (255 * 4) - i;
        b = 255;
    }
    // aumenta r
    if ( i > (255 * 4)  && i <= (255 * 5) ){
        r = i - (255 * 4) ;
        g = 0;
        b = 255;
    }
    // diminuisce b
    if ( i > (255 * 5)  && i <= (255 * 6) ){
        r = 255;
        g = 0;
        b = (255 * 6) - i;
    }

    
    // console.log("r =", r," g =", g," b =", b);
    
    // passo colore al div
    div.style.backgroundColor = "rgb(" + r + "," + g + "," + b +")";
    
    
    // eventualmente potrei generare 
    // una classe specifica per ogni tessera
    // div.classList.add("tess-" + i);
    // però il colore non è sovrascrivibile



    // aggiungo questo div al container
    contenitore.append(div);

}














// A = document.getElementById("B").value;
// console.log("");
// for(let i = 0; i < 10; i++){

// }