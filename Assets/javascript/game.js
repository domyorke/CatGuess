//Main Cat array

var catsArray = [
    'Abyssinian', 'Aegean', 'American Bobtail', 'American Curl', 'American Shorthair', 'American Wirehair', 'Aphrodite Giant', 'Arabian Mau', 'Asian', 'Australian Mist', 'Balinese', 'Bambino', 'Bengal', 'Birman', 'Bombay', 'Brazillian Shorthair', 'British Longhair', 'British Shorthair', 'Burmese', 'Burmilla', 'California Spangled', 'Chantilly Tiffany', 'Charteux', 'Chausie', ' Cheetoh', 'Colorpoint Shorthair', 'Cornish Rex', 'Cymric', 'Cyprus', 'Devon Rex', 'Donskoy', 'Dragon Li', 'Dwelf', 'Egyptian Mau', 'European Shorthair', 'Exotic Shorthair', 'Foldex', 'German Rex', 'Havana Brown', 'Highlander', 'Himalayan', 'Japanese Bobtail', 'Javanese', 'Karelian Bobtail', 'Khao Manee', 'Korat', 'Korean Bobtail', 'LaPerm', 'Lykoi', 'Maline Coon', 'Manx', 'Mekong Bobtail', 'Minskin', 'Munchkin', 'Napoleon', 'Ocicat', 'Ojos Azules', 'Oregon Rex', 'Oriental Bicolor', 'Persian', 'Peterbald', 'Pixie-Bob', 'Raas', 'Ragamuffin', 'Ragdoll', 'Savannah', 'Scottish Fold', 'Selkirk Rex', 'Serengeti', 'Siamese', 'Siberian', 'Singapura', 'Snowshoe', 'Sokoke', 'Somali', 'Sphynx', 'Suphalak', 'Thai Lilac', 'Tonkinese', 'Toyger', 'Turkish Angora', 'Turkish Van', 'Ukranian Levkoy', 'York Chocolate'
];


var answers = [];
var yourGuesses1 = [];
var mostRecentGuess = false;

var winPoints = document.getElementById("Wins");
var guessesLeft  = document.getElementById("guessesLeft");
var guessesLeft = 9;
var losePoints = document.getElementById("Losses");
var guessesSoFar = document.getElementById("yourGuesses");

winPoints = 0;
losePoints = 0;


// Take a random cat from the array, and document this cat next to the current word in the HTML.

var currentCat = catsArray[Math.floor(Math.random() * catsArray.length)].toLowerCase().split("");


//Check random cat in the console

console.log(currentCat)

// Use underscores for the length of random cat (this is now working)

for (let i = 0; i < currentCat.length; i++) { 
    answers[i] = '_';
}
document.getElementById("CurrentWord1").innerHTML = answers;


//On key up, run function, "e". This function is also var "userGuess" 

document.onkeyup = function (e) {
    var userGuess = e.key;


//If userGuess is in the currentCat array, userGuess fills out the answer array.

    for (let i = 0; i < currentCat.length; i++) {
        if (userGuess === currentCat[i]) {
            userGuess = answers[i]
            mostRecentGuess = true
            document.getElementById("yourGuesses").innerHTML = answers;
        }
    }

//If userguess NOT true, guessesLeft is subtracted by one. 

    if (mostRecentGuess !== true) {
        guessesLeft = guessesLeft - 1;
        document.getElementById("guessesLeft1").innerHTML = guessesLeft;
        console.log(guessesLeft);
    }

    document.getElementById("yourGuesses").innerHTML = userGuess; 
    mostRecentGuess = false;

//If user runs out of guesses, the game ends. A new cat is chosen, there is an alert saying "you have been scratched", and the lives resets to 9.

    if (guessesLeft === 0) {
        alert
    }


}





//On key press, add Letter to yourGuesses
/*document.onkeyup = function (f) {
    userGuess = f.key;
    document.getElementById("yourGuesses").innerHTML = userGuess; 

    mostRecentGuess = false;

   
}

 */


