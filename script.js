// Function to print the full song without optimization
function printedSong() {
    console.log("Buddy, you're a boy, make a big noise");
    console.log("Playing in the street, gonna be a big man someday");
    console.log("You got mud on your face, you big disgrace");
    console.log("Kicking your can all over the place");
    console.log("We will, we will rock you");
    console.log("We will, we will rock you");
}
printedSong();

// Function for the repeated refrain
function refrain() {
    console.log("we will, we will rock you");
    console.log("We will, we will rock you");
}
// Optimized function using refrain()
function song() {
    console.log("Buddy, you're a boy, make a big noise");
    console.log("Playing in the street, gonna be a big man someday");
    console.log("You got mud on your face, you big disgrace");
    console.log("Kicking your can all over the place");
    refrain();
}
song();

// Function that returns the refrain instead of logging directly
function refactoredRefrain() {
     return "We will, we will rock you\nWe will, we will rock you";
}

// Optimized song function using refactoredRefrain()
function refactoredSong() {
    console.log("Buddy, you're a boy, make a big noise");
    console.log("Playing in the street, gonna be a big man someday");
    console.log("You got mud on your face, you big disgrace");
    console.log("Kicking your can all over the place");
    console.log(refactoredRefrain());
}

// Call the final function to print the song
refactoredSong();