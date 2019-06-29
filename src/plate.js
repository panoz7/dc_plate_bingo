import {makeHttpRequest} from './helper.js';

export class Plate {

    constructor(letter, active) {
        this.letter = letter;
        this.active = active;
    }

    generateButton() {
        this.button = document.createElement('button');
        this.button.value = this.letter;
        this.button.innerHTML = this.letter;

        if (this.active) this.button.classList.add('active')

        this.button.addEventListener('click', this.handleClick.bind(this))

        return this.button;
    }

    handleClick() {
        if (this.active) {

            let remove = window.confirm(`Remove Plate ${this.letter}`)

            if (remove) {
                this.active = false;
                this.button.classList.remove('active');
                makeHttpRequest(`api/${this.letter}`, 'DELETE')
            }

        }
        else {
            this.active = true;
            this.button.classList.add('active');
            makeHttpRequest(`api/${this.letter}`, 'POST')

        }



    }

}