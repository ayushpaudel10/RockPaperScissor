 const score= JSON.parse(localStorage.getItem('score'));

 //{
//     win: 0,
//     lose: 0,
//     draw: 0
// };

function userPick(yourPick){
    let computerPick=computerMove();

    let result='';

    if (yourPick==='rock'){
        if (computerPick==='rock'){
            result=`It's a tie!`;
        }

        else if (computerPick==='paper'){
            result=`You lose!`;
        }

        else if (computerPick==='scissor'){
            result=`You win!`;
        }
    }

    else if (yourPick==='paper'){
        if (computerPick==='rock'){
            result=`You win!`;
        }

        else if (computerPick==='paper'){
            result=`It's a tie!`;
        }

        else if (computerPick==='scissor'){
            result=`You lose!`;
        }
    }

    else if (yourPick==='scissor'){
        if (computerPick==='rock'){
            result=`You lose!`;
        }

        else if (computerPick==='paper'){
            result=`You win!`;
        }

        else if (computerPick==='scissor'){
            result=`It's a tie!`;
        }
    }

    else if(yourPick==='reset'){
        score.win=0;
        score.lose=0;
        score.draw=0;
        alert(`Score reset! \nWins: ${score.win}, Losses: ${score.lose}, Ties: ${score.draw}.`);
    }
 
    if (result==='You win!'){
        score.win++
    }
    else if (result==='You lose!'){
        score.lose++
    }
    else if (result===`It's a tie!`){
        score.draw++
    }

    localStorage.setItem('score',JSON.stringify(score));

    if(yourPick!=='reset'){
        alert(`You picked ${yourPick}. Computer picked ${computerPick}. ${result} \nWins: ${score.win}, Losses: ${score.lose}, Ties: ${score.draw}.`);
    }
}

function computerMove(){
    let choices=Math.random();
    if(choices>=0 && choices<(1/3)){
        return 'rock';
    }
    else if(choices>=(1/3) && choices<(2/3)){
        return 'paper';
    }
    else if(choices>=(2/3) && choices<1){
        return 'scissor';
    }
}