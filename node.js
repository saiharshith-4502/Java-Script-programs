const readline = require('readline');

// Create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to handle user input
rl.question("Enter input (array, string, or number): ", function(input) {
    
    // Check if the input is a number
    if (!isNaN(input)) {
        input = Number(input);  // Convert to a number
        console.log("You entered a number:", input);
    }
    // Check if the input is an array (comma-separated values)
    else if (input.includes(",")) {
        let arrayInput = input.split(",").map(item => item.trim());
        console.log("You entered an array:", arrayInput);
    }
    // Otherwise, treat it as a string
    else {
        console.log("You entered a string:", input);
    }

    rl.close();  // Close the interface after input is processed
});

