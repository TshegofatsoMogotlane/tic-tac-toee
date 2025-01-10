const checkForSequence = (option1, option2, option3) => {
    if(option1 === null || option2 === null || option3 === null){
        return false;
    }
    return option1 === option2 && option2 === option3;
}

export const checkForWinner = (board) => {
    // 0 1 2
    // 3 4 5
    // 6 7 8

    // Row Winner
    for (let i = 0; i < 9; i += 3) {
        if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
            console.log("We have Row Winner");
            return [i, i+1, i+2];
        }
    }

    // Column Winner
    for (let i = 0; i < 3; i++) {
        if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
            console.log("We have Column Winner");
            return [i, i+3, i+6];
        }
    }

    // Diagonal Winner (top-left to bottom-right)
    if (checkForSequence(board[0], board[4], board[8])) {
        console.log("Diagonal Winner");
        return [0, 4, 8];
    }

    // Diagonal Winner (top-right to bottom-left)
    if (checkForSequence(board[2], board[4], board[6])) {
        console.log("Diagonal Winner");
        return [2, 4, 6];
    }

    // Draw condition (board is full and no winner)
    if (!board.includes(null)) {
        console.log("It's a Draw!");
        return "draw";
    }
    return false
}
