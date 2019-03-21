var Total = 0;
var wins = 0;
var losses = 0;
randomResult = Math.floor(Math.random() * 101) + 19;
$('#random').html('Random-result : ')
console.log(randomResult)
var randomNumbers = [];
for(var i = 0; i < 4; i++) {
    var randomNumber = Math.floor(Math.random() * 12) + 1;
    randomNumbers.push(randomNumber)
    console.log(randomNumbers);
}

$('#wins').text('wins: ' + wins);
$('#losses').text('losses: ' + losses);
$('#score').text(Total);

function reset() {
    randomResult = Math.floor(Math.random() * 101) + 19;
    $('#random').html('Random-result : ')
    console.log(randomResult)
    var randomNumbers = [];
    for(var i = 0; i < 4; i++) {
    
    var randomNumber = Math.floor(Math.random() * 12) + 1;
    randomNumbers.push(randomNumber)
}
}

$('row-4-col-1').text()






