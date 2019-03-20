

//Pseudo Coding

//random number given at the start of the game needs to be between 19-120.

randomResult = Math.floor(Math.random() * 120) + 19;
$('#random').html('Random-result : ')
console.log(randomResult)


// game needs to have 4 crystals, value 1-12
for(var i = 0; i < 4; i++) {
    
    var randomNumber = Math.floor(Math.random() * 12) + 1;
   // console.log(randomNumber);

}


//everytime the user wins/losses, a new random number should be generated, crystals should have new values as well
var wins = 0;
var losses = 0;

// When clicking any Crystal, it should add on top of the previous value until it is equal to the random number.


// if it is greater than the random number, its a loss and start over.

//if it is equal, its a win and start over

