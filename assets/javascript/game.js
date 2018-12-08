// setting values for variable
var possibleAnswers = ["a" , "b", "c", "d","e","f", "g" , "h" ,"i", "j"];
var rand = null;
var userwins = 0;
var userlosses = 0;
var usersguessesleft = 10;
var alreadyguessed = [];


     gamestart = alert("Welcome to the psychic game");
    // Grabs ids
function myfunction(){
     document.getElementById("wins") .textContent = userwins;
     document.getElementById("loss") .textContent = userlosses;
     document.getElementById("left") .textContent = usersguessesleft;
     document.getElementById("guesses") .textContent = alreadyguessed;
     
}
//variable function that updates already guessed array
var updateGuessed = function(){
     document.getElementById("guesses").innerHTML = alreadyguessed.join(", ")
}
//variable function thatupdates guesses left
var updateGuessesleft = function(){
     document.getElementById("left").innerHTML = usersguessesleft;
}
//variable function for computers guess
var letterToGuess = function(){
      rand = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
}

// resets once loss
var reset = function(){
     usersguessesleft = 10;
     alreadyguessed = [];
     updateGuessed();
     updateGuessesleft();
     letterToGuess();
     
}

myfunction();
letterToGuess();


document.onkeydown = function(event){
     usersguessesleft--;

     var letter = String.fromCharCode(event.which).toLowerCase();

     alreadyguessed.push(letter);

     updateGuessed();
     updateGuessesleft();

     if(letter === rand){
          userwins++;
          document.getElementById("wins").innerHTML = userwins;

          reset();
     } 

     if(usersguessesleft === 0){
      userlosses++;
      document.getElementById("loss").innerHTML = userlosses;
      reset();
     }
     
}







  
     
     
     

     


     
 
    
    








 
 
 










