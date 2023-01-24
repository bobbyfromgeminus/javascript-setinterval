'use strict';

// DEKLARÁCIÓS RÉSZ

    // számláló dobozok
    const counterBoxes = document.querySelectorAll('section article div');
    const firstBox = counterBoxes[0];
    const secondBox = counterBoxes[1];

    // vezérlő gombok
    const controllerButtons = document.querySelectorAll('section article button');
    const startButton = controllerButtons[0];
    const pauseButton = controllerButtons[1];

    // számláló változók
    let i = 1;
    let j = 1;

    // futás/megállítás állapota
    let isPaused = false;


// INTERVALLUM VEZÉRLÉS

    // Léptető és megjelenítő függvény
    const setStep = () => {
        firstBox.textContent = i;
        i++;
        if (isPaused == false) {
            secondBox.textContent = j;
            j++;
        }
    }

    // "Indít" gomb elrejtése
    const hideStartButton = () => {
        startButton.classList.toggle('hide');
        pauseButton.classList.toggle('hide');
    }

    // függvény hívás 1000 ms-onként
    const intervalStep = () => {
        setInterval(setStep, 1000)
    }

    // "Indít" elrejtése és intervallum indítása
    const startCount = () => {
        hideStartButton();
        intervalStep();
    }

    // "Megállít/Folytat" gomb szín és tartalom módosítása
    const changeButtonFace = () => {
        if (isPaused == false) {
            pauseButton.classList.remove('green');
            pauseButton.classList.add('orange');
            pauseButton.textContent = 'Megállít';
        } else {
            pauseButton.classList.remove('orange');
            pauseButton.classList.add('green');
            pauseButton.textContent = 'Folytat';
        }
    }

    // futás/megállítás állapotváltó
    const changeState = () => {
        if (isPaused == false) isPaused = true;
        else isPaused = false;
        changeButtonFace();
    }

    // Eseménykezelő az "Indít" gombon
    startButton.addEventListener('click', startCount);

    // Eseménykezelő a "Megállít" gombon
    pauseButton.addEventListener('click', changeState);