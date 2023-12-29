function getComputerChoice() {
    let apple = ['rock','paper','scissors'];
    let computerChoice = Math.floor(Math.random() * 3);
    return apple[computerChoice];
}

function playround(pselecta,cselecta) {
    const pselect = pselecta.toLowerCase();
    var cselect = cselecta.toLowerCase();

    let clappo = true;
    while (clappo == true){
        if (pselect == cselect) {
            var cselect = getComputerChoice();
            console.log('Draw, re-playing.');
        }

        if (pselect == 'rock') {
            if (cselect =='scissors') {
                return 'Rock beats Scissors, You Win';
            }
            else {
                return 'Paper beats Rock, You Lose';
            }
        }
        if (pselect == 'paper') {
            if (cselect == 'rock') {
                return 'Paper beats Rock, You Win';
            }
            else {
                return 'Scissors beats Paper, You Lose';
            }
        }
        if (pselect =='scissors') {
            if (cselect == 'paper') {
                return 'Scissors beats Paper, You Win';
            }
            else {
                return 'Rock beats Scissors, You Lose';
            }
        }
    }
}

function game() {
    var x = 0;
    var y = 0;
    let c = '';

    while ((x<3) && (y<3)) {
        c = playround(player_selection,computerChoice);
        if  (c.indexOf('You Win') > -1) {
            x = x+1;
            console.log('Current Score:'+x+' : '+y);
        }

        if (c.indexOf('You Lose') > -1) {
            y =y+1;
            console.log('Current Score:'+x+' : '+y);
        }
    }
    console.log('Final Score:'+x+' : '+y);
}


let player_selection = 'rock';
let computerChoice = getComputerChoice();

console.log(playround(player_selection,computerChoice));
console.log(player_selection);
console.log(computerChoice);
console.log(game());


