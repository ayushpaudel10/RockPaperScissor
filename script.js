function userPick(yourPick){
    let computerPick=computerMove();

    let result='';

    if (yourPick==='rock'){
        if (computerPick==='rock'){
            result=`It's a tie!`;
        }

        if (computerPick==='paper'){
            result=`You lose!`;
        }

        if (computerPick==='scissors'){
            result=`You win!`;
        }
    }

    if (yourPick==='paper'){
        if (computerPick==='rock'){
            result=`You win!`;
        }

        if (computerPick==='paper'){
            result=`It's a tie!`;
        }

        if (computerPick==='scissor'){
            result=`You lose!`;
        }
    }

    if (yourPick==='scissor'){
        if (computerPick==='rock'){
            result=`You lose!`;
        }

        if (computerPick==='paper'){
            result=`You win!`;
        }

        if (computerPick==='scissors'){
            result=`It's a tie!`;
        }
    }

    alert(`You picked ${yourPick}. Computer picked ${computerPick}. ${result}`)
}

function computerMove(){
    let choices=Math.random();
    if(choices>=0 && choices<(1/3)){
        return 'rock';
    }
    if(choices>=(1/3) && choices<(2/3)){
        return 'paper';
    }
    if(choices>=(2/3) && choices<1){
        return 'scissor';
    }
}