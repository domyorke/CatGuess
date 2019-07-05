var cats = [
    'Abyssinian', 'Aegean', 'American Bobtail', 'American Curl', 'American Shorthair', 'American Wirehair', 'Aphrodite Giant', 'Arabian Mau', 'Asian', 'Australian Mist', 'Balinese', 'Bambino', 'Bengal', 'Birman', 'Bombay', 'Brazillian Shorthair', 'British Longhair', 'British Shorthair', 'Burmese', 'Burmilla', 'California Spangled', 'Chantilly Tiffany', 'Charteux', 'Chausie', ' Cheetoh', 'Colorpoint Shorthair', 'Cornish Rex', 'Cymric', 'Cyprus', 'Devon Rex', 'Donskoy', 'Dragon Li', 'Dwelf', 'Egyptian Mau', 'European Shorthair', 'Exotic Shorthair', 'Foldex', 'German Rex', 'Havana Brown', 'Highlander', 'Himalayan', 'Japanese Bobtail', 'Javanese', 'Karelian Bobtail', 'Khao Manee', 'Korat', 'Korean Bobtail', 'LaPerm', 'Lykoi', 'Maline Coon', 'Manx', 'Mekong Bobtail', 'Minskin', 'Munchkin', 'Napoleon', 'Ocicat', 'Ojos Azules', 'Oregon Rex', 'Oriental Bicolor', 'Persian', 'Peterbald', 'Pixie-Bob', 'Raas', 'Ragamuffin', 'Ragdoll', 'Savannah', 'Scottish Fold', 'Selkirk Rex', 'Serengeti', 'Siamese', 'Siberian', 'Singapura', 'Snowshoe', 'Sokoke', 'Somali', 'Sphynx', 'Suphalak', 'Thai Lilac', 'Tonkinese', 'Toyger', 'Turkish Angora', 'Turkish Van', 'Ukranian Levkoy', 'York Chocolate'
];

var wins = 0;
var loses = 0;
var guessesLeft = 10;
var answers = [];
var yourGuesses = [];
var lastGuess = false;

var currentCat = cats[Math.floor(Math.random() * cats.length)]
.toLowerCase()
.split("")
;

console.log(currentCat)

for (let i = 0; i < currentCat.length; i++) { 
    answers[i] = '_';
}

document.onkeypress = function (e) {
    console.log(e.key)
    var userGuess = e.key
    for (let i = 0; i < currentCat.length; i++) {
        if (userGuess === currentCat[i]) {
            answers[i] = userGuess
            lastGuess = true
        }

    }
    if (lastGuess !== true) {
        console.log("abc");
        guessesLeft = guessesLeft - 1;
    }
    lastGuess = false;

    console.log(answers)
    console.log(guessesLeft)
}

//var currentCat = document.getElementById("mainCat") {}


