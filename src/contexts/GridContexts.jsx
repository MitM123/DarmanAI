import { createContext } from "react";

export const GridContext = createContext({
    winner: null,
    setWinner: () => { },
    gameOver: false,
    setGameOver: () => { },
    currentPlayer: 'player1',
    setCurrentPlayer: () => { },
    checkWinner: () => { },
});