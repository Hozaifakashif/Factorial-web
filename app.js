function factorial(num) {
    // Check if the number is negative
    if (num < 0) {
        return "Factorial is not defined for negative numbers";
    }
    
    // Base case: If the number is 0 or 1, factorial is 1
    if (num === 0 || num === 1) {
        return 1;
    }
    
    // Recursive case: Multiply the number with factorial of (number - 1)
    return num * factorial(num - 1);
}

function calculateFactorial() {
    const userInput = prompt("Enter a number:");
    
    if (!userInput || isNaN(userInput)) {
        alert("Please enter a valid number!");
        return;
    }
    
    const number = parseInt(userInput);
    const result = factorial(number);
    alert("Factorial of " + number + " is: " + result);
}

// Example usage
calculateFactorial();