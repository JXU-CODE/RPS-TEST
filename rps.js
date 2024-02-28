
//random computer choice
function getComputerChoice() {
    let apple = ['rock','paper','scissors'];
    let computerChoice = Math.floor(Math.random() * 3);
    return apple[computerChoice];
}

const numberp = document.getElementById('playscore');
const numberc = document.getElementById('compscore');

let pcount = 0;
let ccount = 0;

numberp.textContent = pcount;
numberc.textContent = ccount;


//play 1 round of rps, replay the round if it ends in a draw
function playround(pselect,cselect) {
    //const pselect = pselecta.toLowerCase();
    //var cselect = cselecta.toLowerCase();

    //let draw = true;
    //while (draw == true){
        if (pselect == cselect) {
            //var cselect = getComputerChoice();
            return 'DRAW!';
        }

        if (pselect == 'rock') {
            if (cselect =='scissors') {
                pcount++;
                numberp.textContent = pcount;
                return 'Rock beats Scissors, You Win';
                
            }
            else {
                ccount++;
                numberc.textContent = ccount;
                return 'Paper beats Rock, You Lose';
                
            }
        }
        if (pselect == 'paper') {
            if (cselect == 'rock') {
                pcount++;
                numberp.textContent = pcount;
                return 'Paper beats Rock, You Win';
                
            }
            else {
                ccount++;
                numberc.textContent = ccount;
                return 'Scissors beats Paper, You Lose';
                
            }
        }
        if (pselect =='scissors') {
            if (cselect == 'paper') {
                pcount++;
                numberp.textContent = pcount;
                return 'Scissors beats Paper, You Win';
                
            }
            else {
                ccount++;
                numberc.textContent = ccount;
                return 'Rock beats Scissors, You Lose';
            }
        }
    }
//}

//This does nothing
//const scoreboard = document.createElement('div','scoreboard');
//.innerhtml can be a security risk, use .textcontent if html isnt specifically needed. 

//do not add () to the function when calling it in the method, it will be called immediatley if you do. 
document.getElementById("rock").addEventListener('click',buttonClickedr);
document.getElementById("paper").addEventListener('click',buttonClickedp);
document.getElementById("scissors").addEventListener('click',buttonClickeds);

//Currently plays alert before updating the DOM
//Can be changed by separating alert string to separate funcion, might change later 
function buttonClickedr() {
    var comp = getComputerChoice();
    alert(playround('rock',comp));
    wincheck();
}
function buttonClickedp() {
    var comp = getComputerChoice();
    alert(playround('paper',comp));
    wincheck();
}
function buttonClickeds() {
    var comp = getComputerChoice();
    alert(playround('scissors',comp));
    wincheck();
}

//check to see if someone has hit 5 points and won
function wincheck() {
    if (pcount >= 5){
        alert('You Win!');
        if (confirm('Play Again?')){
            location.reload();
        } else{ 
            alert('Thanks for Playing!');
        }
    }
    if (ccount >=5){
        alert('You Lose!');
        if (confirm('Play Again?')){
            location.reload();
        } else{
            alert('Thanks for Playing!');
        }
    }
}

//Code for 5 rounds
// function game() {
//     var x = 0;
//     var y = 0;
//     let c = '';

//     while ((x<3) && (y<3)) {
//         c = playround(player_selection,computerChoice);
//         if  (c.indexOf('You Win') > -1) {
//             x = x+1;
//             console.log('Current Score:'+x+' : '+y);
//         }

//         if (c.indexOf('You Lose') > -1) {
//             y =y+1;
//             console.log('Current Score:'+x+' : '+y);
//         }
//     }
//     console.log('Final Score:'+x+' : '+y);
// }

//test code
// let player_selection = 'rock';
// let computerChoice = getComputerChoice();

// console.log(playround(player_selection,computerChoice));
// console.log(player_selection);
// console.log(computerChoice);
// console.log(game());


