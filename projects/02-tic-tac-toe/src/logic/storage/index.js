export const saveGameToStorage = ({ board, turn }) => {
    // save game here
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}
  
export const resetGameStorage = () => {
   window.localStorage.removeItem('board')
   window.localStorage.removeItem('turn')
}