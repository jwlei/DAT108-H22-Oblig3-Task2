<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Dice</title>
</head>
<body>
    <h1>Roll a dice</h1>
    <div id="dice-section">
        <h3>Result:
            <!-- Assign the result of the dice roll to the text of this element -->
            <span data-diceoutput> </span>
        </h3>
        <!-- Add a button that calls the rollDice function when clicked -->
        <button data-dicebutton>Roll</button>
    </div>
    <script type="module" src="./DiceController.js"></script>
</body>
</html>