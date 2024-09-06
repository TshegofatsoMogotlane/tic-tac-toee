const checkForSequence = (option1, option2, option3)=>{
    return option1===option2 && option2===option3
}
export const checkForWinner = (board)=>{
    console.log("In here")
    // 0 1 2
    // 3 4 5 
    // 6 7 8

    //Row Winner
    for(let i=0; i<9; i+=3){
        if(checkForSequence(board[i], board[i+1], board[i+2])){
            console.log("We have Row Winner")
            return true
        }
    }
    //Column Winner
    for(let i=0; i<3; i++){
        if(checkForSequence(board[i], board[i+3], board[i+6])){
            console.log("We have Column Winner")
            return true
        }
    }

    //diaginal 1
    if(board[0]===board[4] && board[4]===board[8]){
        console.log("Diagonal Winner");
        return true
    }
    //diagonal2
    if(board[2]===board[4] && board[4]===board[6]){
        console.log("Diagonal Winner");
        return true
    }
}