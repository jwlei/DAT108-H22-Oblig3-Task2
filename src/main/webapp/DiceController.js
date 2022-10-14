"use strict";

import { Dice } from "./Dice.js";


/**
 * Class: DiceController
 * @param {string} elementId
 * @returns {string}
 */
class DiceController {

    /**
     * Constructor
     * @param elementId
     * @returns {string}
     */
    constructor(elementId) {

            // We bind the methods to the class instance
            // so that we can use them as event handlers
            this.run = this.run.bind(this);
            this.rollDice = this.rollDice.bind(this);

            // We get the root element
            this.diceElement = document.getElementById(elementId);

            // Assign the button and output to the id = root with
            // the data-dicebutton and data-diceoutput attributes
            this.button = this.diceElement.querySelector('*[data-dicebutton]')
            this.output = this.diceElement.querySelector('*[data-diceoutput]');

            // Create a new Dice object
            this.dice = new Dice();
        }

        // We add the event listener to the button
        // and call the rollDice method
        run() {
            this.button.addEventListener('click', this.rollDice);
        }

        // We get the value of the dice and display it
        rollDice() {
            this.output.innerText = this.dice.roll();
        }
}

// We create a new DiceController object with argument elementId = dice-section
const diceController = new DiceController("dice-section");

// We add the event listener to the DOMContentLoaded event and call the run method
document.addEventListener("DOMContentLoaded", diceController.run, true);