
//holds possible words
var gameWords =[ "pineapple", "beach", "tropical", "luau", "waikiki", "aloha", "maui", "coconut","snorkeling", "volcano","surfboard","pig","lei","fish"];
//holds randomly selected word
var randomWord = "";
//holds indiviudal letters of word
var lettersInWord = [];
//holds length of word
var wordLength = 0;
//holds unguessed and correctly guessed letters
var correctAndBlank = [];
//holds incorrectly guessed letters
var incorrectGuess = [];
//counts wins
var wins = 0;
//counts losses
var losses = 0;
//counts remaining guesses
var remainingGuesses = 10;
//counts number of correct guesses
var correctGuessCounter =0;
//ensures letter only pressed once 
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function restart ()
{
     //Selects random word from game word array
     randomWord =gameWords[Math.floor(Math.random()* gameWords.length)];
     lettersInWord = randomWord.split('');
     wordLength = lettersInWord.length;
     correctGuessCounter = 0;
     lettersGuessed = 0;
     remainingGuesses = 10;
     incorrectGuess=[];
     correctAndBlank=[];
     alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
     test = false;
     startGame ();
}


function startGame(){
    randomWord =gameWords[Math.floor(Math.random()* gameWords.length)];
    lettersInWord = randomWord.split('');
    wordLength = lettersInWord.length;
    correctGuessCounter = 0;
    remainingGuesses = 10;
    incorrectGuess=[];
    correctAndBlank=[];
    alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


    for (var i=0; i<wordLength;i++){
        //pushes correct number of underscores to screen
        correctAndBlank.push("_");
       document.getElementById("wordToGuess").innerHTML =correctAndBlank;
    }
    //updates HTML 
    document.getElementById("wordToGuess").innerHTML = correctAndBlank.join(" ");
    document.getElementById("guessesLeft").innerHTML =remainingGuesses;
    document.getElementById("winCounter").innerHTML = wins;
    document.getElementById("lossCounter").innerHTML = losses;
    document.getElementById("incorrectGuesses").innerHTML = incorrectGuess;

}

//validates user key entry
function checkLetters(userKey) {
    if(randomWord.indexOf(userKey)> -1) 
    {
        for(var i=0;i<wordLength;i++) {
            if(lettersInWord[i]===userKey) {
                correctGuessCounter++;
                correctAndBlank[i]=userKey;
                document.getElementById("wordToGuess").innerHTML = correctAndBlank.join(" ");
            }
        }
    }
    else {
        incorrectGuess.push(userKey);
        remainingGuesses--;
        document.getElementById("guessesLeft").innerHTML =remainingGuesses;
        document.getElementById("incorrectGuesses").innerHTML =incorrectGuess;
    }
}

//determine if win or lose and alert user either way
function winOrLose () {
   if (correctGuessCounter===wordLength) {  
      wins++
      document.getElementById("winCounter").innerHTML = wins;
      alert("Mau hoohiwahiwa! You win!");
      restart();
   }
   else if (remainingGuesses === 0){
       losses++;
       document.getElementById("lossCounter").innerHTML = losses;
       alert ("e kala mai iaʻu! You Lose!");
       restart();
   }
}

startGame();

document.onkeyup = function(event){
    test=true;
    var lettersGuessed = event.key;
    for(var i=0; i<alphabet.length; i++) {
        if(lettersGuessed===alphabet[i] && test===true){
           var spliceWord =alphabet.splice(i,1);
           checkLetters(lettersGuessed);
           winOrLose();
        }
    }
} 






