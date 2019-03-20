// Global Variables
// =======================================================

// Crystal Variables
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    }
        
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins, Losses, and Round Counter
var winCount = 0;
var lossCount = 0;
var roundCount = 0;

// Functions
// =======================================================
var start = function() {

    // Reset Current Score
    currentScore = 0;
    // Reset Round Count
    roundCount = -1;
    // Set a new Target Score (between 19-120)
    targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    // Set different values for each crystal (1-12)
    crystal.blue.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystal.red.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystal.green.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystal.yellow.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    // change HTML to reflect all these changes
    $("#targetScore").html(targetScore)
    $("#yourScore").html(currentScore)
    
};

// Respond to clicks on crystals
var addValues = function(crystal) {
    // Change currentScore
    currentScore += crystal.value;
    // Update HTML with currentScore
    $("#yourScore").html(currentScore);
    // Call the checkWin function
    checkWin();
};

// Check if user won or lost and reset the game
var checkWin = function () {
    if (currentScore > targetScore) {
        alert("You lose!!!");
        lossCount++;
        $("#lossCount").html(lossCount);
        start();
    }
    else if (currentScore == targetScore) {
        alert("YEE!! You win!!");
        winCount++;
        $("#winCount").html(winCount);
        start();
    }
};

// Check how many rounds it takes to win
var roundCounter = function() {
    roundCount++;
    $("#roundCount").html(roundCount);
};
// Main Process
// =======================================================
$("#blue").click(function() {
    addValues(crystal.blue);
    roundCounter();
});
$("#red").click(function() {
    addValues(crystal.red);
    roundCounter();
});
$("#green").click(function() {
    addValues(crystal.green);
    roundCounter();
});
$("#yellow").click(function() {
    addValues(crystal.yellow);
    roundCounter();
});

start();