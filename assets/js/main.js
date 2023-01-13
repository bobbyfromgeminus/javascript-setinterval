'use strict';

// DEKLARÁCIÓS RÉSZ

// konténer div
const timerBox = document.querySelector('main div.timer');

// megjelenő idő induló értéke
let time = 0;

// Léptető és megjelenítő függvény
const timerFunction = () => {
    timerBox.textContent = time;
    time++;
}

// Intervallum beállítása - függvény hívás 1000 ms-onként
setInterval(timerFunction, 1000);