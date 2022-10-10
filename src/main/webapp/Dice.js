/**
 * Class Dice
 * @param {number} value
 * @returns {number}
 */

export class Dice {
    constructor(value) {
        this.value = value;
    }

    roll() {
        // We return the value of a dice throw
        return (this.value = 1 + Math.floor(Math.random() * 6));
    }
}