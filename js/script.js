'use strict';
/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata 
si colora di azzurro ed emetto un messaggio in console 
con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */


//  ######### INIZIO #########

// tengo lo scope globale PULITO, quindi prendo solo il
// button Play, che è l'unica cosa che mi serve
const playBtn = document.getElementById('play');

//creo la funzione che mi permette di ottenere 
//l'azione nel blocco al blick del bottone
function play(){
console.log('Inizia!');
    //BONUS2.creo una variabile con valore il numer
    //delle bombe che troverò nel gioco,e dato che è 
    //un valore che non CAMBIERà MAI, scrivo il nome della
    //variabile in MAIUSCOLO
    const NUM_BOMB = 16;
    //BONUS2.creo un array dove al suo interno si genera
    //la posizione delle bombe in maniera CASUALE
    const bombsPosition = [];

    //2.ora creo una variabile che mi indica il numero di celle 
    //da inserire dentro l griglia di gioco
    let numCell;
    //creo la variabile che mi servirà per appenderci cio che creo
    const playground = document.getElementById('playground');
    playground.innerHTML = '';
    //Bonus.quando faccio play ho bisogno del valore della select
    //che verrà introdotto (in questo caso la difficoltà)
    const levelHtml = document.getElementById('difficulty');
    const level = levelHtml.value;
    //creo uno switch(if) che a seconda della difficoltà
    //creerà il totale delle celle
    switch(level){
        case '1':
        default:
            numCell = 100 //facile
        break;
        case '2':
            numCell = 81; //medio
        break;
        case '3':
            numCell = 49; //difficile
        break;
    }
    //BONUS2. ora devo riempire l'array, che al momento è vuoto,
    //con le posizioni delle bombe generate random,
    //fino ad arrivare ad un numero di 16 posizioni coperte
    while(bombsPosition.length < NUM_BOMB){
        const bomb = randomNumber(1, numCell);
        //ora controllo che non ci siano posizioni doppie
        if(!bombsPosition.includes(bomb)){
            //e se tutto è ok li PUSHO nell'array
            bombsPosition.push(bomb);
        }
    }
    console.log(bombsPosition);
    
    //2.creo la funzione che crea la cella
    function drawCell(num){
        //Bonus.mi serve una variabile che definisca
        //il numero di celle per lato della griglia
        const cellPerSide = Math.sqrt(numCell); //la radice quadrata perchè 10x10=100, 9x9=81 e 7x7=49
        //creo il div dove creerò il quadrato
        const cell = document.createElement('div');
        //e gli aggiungo la classe che gli darà lo stile dal css
        cell.className = 'square';
        //Bonus.dato che ho bisogno che le celle cambino
        //dimensione a seconda della difficoltà
        //aggiungo gli stili delle sue misure da js
        cell.style.width = `calc(100% /${cellPerSide})`;
        cell.style.height = `calc(100% /${cellPerSide})`;
        //devo inserire il numero nell'html, e quindi
        cell.innerHTML = `
            <span>${num}</span>
        `;
        //3.voglio che al click, la casella cambi colore
        //quindi aggiungo uno stile tramite la classe
        //che ho preparato su css
        cell.addEventListener('click', function(){
            if(bombsPosition.includes(num)){
                cell.classList.add('click-color-bomb')
            }else{
                cell.classList.add('click-color');
            } 
        })
        //cell deve avere un ritorno? Si, deve 
        //tornare la cell
        return cell;
    }
    //creo la funzione che mi andrà a creare la GRIGLIA del gioco
    function drawGrid(){
        //creo il div dove andrò ad appendere la griglia
        const grid = document.createElement('div');
        //e gli aggiungo la classe che gli darà lo stile dal css
        grid.className = 'grid';
        //con un ciclo for vado a creare le celle
        for(let i = 1; i <= numCell; i++){
            //2.ora qua metto la variabile cell
            //che dovrà girare la
            //funzione drawCell fin quando  
            //non creerà tutti i div
            const cell = drawCell(i);
            //ora appendo la cell alla griglia
            grid.appendChild(cell);
        }
        //ora appendo la griglia al div principale, playground
        playground.appendChild(grid);
    }
    //ora chiamiamo la funzione che disegnerà la griglia
    //con annessi i suoi quadrati all'interno
    drawGrid();
}
//ora che ho la funzione pronta, la attacco
//al bottone play, e al click eseguirà quello che gli ho detto
//di fare nella funzione
playBtn.addEventListener('click', play);