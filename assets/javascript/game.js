randomResult = Math.floor(Math.random() * 101) + 19;
$('#random').html('Random-result : ')
console.log(randomResult)




var randomNumbers = [];
for(var i = 0; i < 4; i++) {
    
    var randomNumber = Math.floor(Math.random() * 12) + 1;
    randomNumbers.push(randomNumber)
}
console.log(randomNumbers);

var Total = 0;
var wins = 0;
var losses = 0;

//$('#wins').text(wins);
//$('#losses').text(losses);

function reset() {
    randomResult = Math.floor(Math.random() * 120) + 19;
    $('#random').html('Random-result : ')
    console.log(randomResult)
    var randomNumbers = [];
    for(var i = 0; i < 4; i++) {
    
    var randomNumber = Math.floor(Math.random() * 12) + 1;
    randomNumbers.push(randomNumber)
}
Total= 0;
$('#score').text(Total);
}







