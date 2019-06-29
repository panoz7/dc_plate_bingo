import {Plate} from './plate.js';
import {makeHttpRequest} from './helper.js';




buildPlateButtons()



async function buildPlateButtons() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
    const firstLetters = letters.slice(0,7);

    let plates = await makeHttpRequest('api', 'GET');
    plates = JSON.parse(plates);

    const plateButtons = document.getElementById('plateButtons');

    firstLetters.forEach(firstLetter => {
    
        // Create the column for the letters
        let letterColumn = document.createElement('div');
        plateButtons.appendChild(letterColumn);
        
        // Create the buttons for each letter column
        letters.forEach(secondLetter => {
        
            let plateLetters = firstLetter + secondLetter;

            let plate = new Plate(plateLetters, plates.includes(plateLetters));
            letterColumn.appendChild(plate.generateButton())
    
        })
    
    })
}



