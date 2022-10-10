/**
 * Class: DiceController
 * @param {string} elementId
 * @returns {string}
 */

"use strict";

import { Dice } from "./Dice.js";

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
            this.root = document.getElementById(elementId);

            // Assign the button and output to the id = root with
            // the data-dicebutton and data-diceoutput attributes
            this.button = this.root.querySelector('*[data-dicebutton]')
            this.output = this.root.querySelector('*[data-diceoutput]');

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

// We create a new DiceController object with the argument "root"
const diceController = new DiceController("root");

// We add the event listener to the DOMContentLoaded event and call the run method
document.addEventListener("DOMContentLoaded", diceController.run, true);