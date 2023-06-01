// Initialize variables
var point = 0; // The point to match
var gameOver = false; // Whether the game is over or not
var bet = ""; // The type of bet
var balance = 100; // The amount of money the player has
var amount = 10; // The amount of money the player bets

// Get references to HTML elements
var die1 = document.getElementById("die1");
var die2 = document.getElementById("die2");
var pass = document.getElementById("pass");
var dont = document.getElementById("dont");
var roll = document.getElementById("roll");
var message = document.getElementById("message");
var balanceSpan = document.getElementById("balance");
var amountInput = document.getElementById("amount");

// Define a function to roll a single die
function rollDie() {
    // Generate a random number between 1 and 6
    var num = Math.floor(Math.random() * 6) + 1;
    // Return the number
    return num;
}

// Define a function to roll two dice and update the numbers
function rollDice() {
    // Check if the game is over
    if (gameOver) {
        // Reset the game
        point = 0;
        gameOver = false;
        bet = "";
        message.textContent = "";
        pass.disabled = false;
        dont.disabled = false;
        roll.disabled = true;
        amountInput.disabled = false;
    } else {
        // Check if a bet is made
        if (bet != "") {
            // Get the amount of money the player bets
            amount = parseInt(amountInput.value);
            // Check if the amount is valid
            if (amount > 0 && amount <= balance) {
                // Roll two dice
                var num1 = rollDie();
                var num2 = rollDie();
                // Update the numbers
                die1.textContent = num1;
                die2.textContent = num2;
                // Calculate the sum
                var sum = num1 + num2;
                // Check the outcome
                if (point == 0) {
                    // First roll
                    if (sum == 7 || sum == 11) {
                        // Win or lose depending on the bet
                        if (bet == "pass") {
                            message.textContent = "You win!";
                            balance += amount; // Increase the balance by the amount
                        } else {
                            message.textContent = "You lose!";
                            balance -= amount; // Decrease the balance by the amount
                        }
                        gameOver = true;
                    } else if (sum == 2 || sum == 3 || sum == 12) {
                        // Lose or win depending on the bet
                        if (bet == "pass") {
                            message.textContent = "You lose!";
                            balance -= amount; // Decrease the balance by the amount
                        } else {
                            message.textContent = "You win!";
                            balance += amount; // Increase the balance by the amount
                        }
                        gameOver = true;
                    } else {
                        // Set the point
                        point = sum;
                        message.textContent = "Your point is " + point + ". Roll again.";
                    }
                } else {
                    // Subsequent rolls
                    if (sum == point) {
                        // Win or lose depending on the bet
                        if (bet == "pass") {
                            message.textContent = "You win!";
                            balance += amount; // Increase the balance by the amount
                        } else {
                            message.textContent = "You lose!";
                            balance -= amount; // Decrease the balance by the amount
                        }
                        gameOver = true;
                    } else if (sum == 7) {
                        // Lose or win depending on the bet
                        if (bet == "pass") {
                            message.textContent = "You lose!";
                            balance -= amount; // Decrease the balance by the amount
                        } else {
                            message.textContent = "You win!";
                            balance += amount; // Increase the balance by the amount
                        }
                        gameOver = true;
                    } else {
                        // Keep rolling
                        message.textContent = "Roll again.";
                    }
                }
                // Update the balance display
                balanceSpan.textContent = balance;
            } else {
                // Invalid amount
                message.textContent = "Please enter a valid amount.";
            }
        } else {
            // No bet is made yet
            message.textContent = "Please choose a bet first.";
        }
    }
}

// Define a function to bet on pass line
function betPass() {
    // Check if the game is not over and no bet is made yet
    if (!gameOver && bet == "") {
        // Set the bet to pass line
        bet = "pass";
        // Disable the other button and input field
        dont.disabled = true;
        amountInput.disabled = true;
        // Enable the roll button
        roll.disabled = false;
        // Roll the dice
        rollDice();
    }
}

// Define a function to bet on don't pass line
function betDont() {
    // Check if the game is not over and no bet is made yet
    if (!gameOver && bet == "") {
        // Set the bet to don't pass line
        bet = "dont";
        // Disable the other button and input field 
        pass.disabled = true;
        amountInput.disabled = true;
        // Enable the roll button 
        roll.disabled = false;
        // Roll the dice 
        rollDice();
    }
}