import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    //check all posible winning combinations to see if x or o is the winner
    for(const combo of WINNER_COMBOS){
      const[a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[b] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    //if there is no winner
    return null
}

export const checkEndGame = (newBoard) => {
    //checks if there is a tie when all of the spaces on the board are empty
    return newBoard.every((square) => square !== null)
}