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


/* 

<div class="square">
    <span>1</span>
</div>

*/




// tengo lo scope globale PULITO, quindi prendo solo il
// button Play, che è l'unica cosa che mi serve
const playBtn = document.getElementById('play');

//creo la funzione che mi permette di ottenere 
//l'azione nel blocco al blick del bottone
function play(){
// console.log('Inizia!');

    //2.ora creo una variabile che mi indica il numero di celle 
    //da inserire dentro l griglia di gioco
    const numCell = 100;

    //2.creo la funzione che crea la cella
    function drawCell(numCell){
        //creo il div dove creerò il quadrato
        const cell = document.createElement('div');
        //e gli aggiungo la classe che gli darà lo stile dal css
        cell.className = 'square';
        //devo inserire il numero nell'html, e quindi
        cell.innerHTML = `
            <span>${numCell}</span>
        `;
        //cell deve avere un ritorno? Si, deve 
        //tornare la cell
        return cell;
    }
    //creo la funzione che mi andrà a creare la GRIGLIA del gioco
    function drawGrid(){
        //creo la variabile che mi servirà per appenderci cio che creo
        const playground = document.getElementById('playground');
        //creo il div dove andrò ad appendere la griglia
        const grid = document.createElement('div');
        //e gli aggiungo la classe che gli darà lo stile dal css
        grid.className = 'grid';

        for(let i = 1; i <= 100; i++){
            //2.ora qua metto la variabile cell
            //che dovrà girare fin quando  non creerà tutti i div
            const cell = drawCell(i);
            //ora appendo la cell alla griglia
            grid.appendChild(cell);
        }
        //ora appendo la griglia al div principale, playground
        playground.appendChild(grid);

    }

}
//ora che ho la funzione pronta, la attacco
//al bottone play, e al click eseguirà quello che gli ho detto
//di fare nella funzione
playBtn.addEventListener('click', play);