import { g } from "motion/react-client";
import { createContext } from "react";

export const GridContext = createContext({
    grid: Array(9).fill(''),
    setGrid: () => { },
    showModal: false,
    setShowModal: () => { },
    winner: null,
    setWinner: () => { },
    gameOver: false,
    setGameOver: () => { },
    currentPlayer: 'player1',
    setCurrentPlayer: () => { },
    checkWinner: () => { },
    makeBotMove: () => { },
});