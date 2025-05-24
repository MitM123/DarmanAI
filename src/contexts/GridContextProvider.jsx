import { useState } from "react"
import { GridContext } from "./GridContexts"
import sound from '../assets/sound.wav'
import { Howl } from "howler"
const clickSound = new Howl({
    src: [sound],
    volume: 1,
});

export default function GridContextProvider({ children }) {
    const [currentPlayer, setCurrentPlayer] = useState('player1')
    const [showModal, setShowModal] = useState(false)
    const [grid, setGrid] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    function handleCheckWinner(newGrid) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern
            if (newGrid[a] && newGrid[a] === newGrid[b] && newGrid[a] === newGrid[c]) {
                return newGrid[a]
            }
        }

        if (newGrid.every(cell => cell !== '')) {
            return 'tie'
        }
        return null
    }


    function handleBotMove(currentGrid) {
        const availableMoves = currentGrid
            .map((cell, index) => cell === '' ? index : null)
            .filter(index => index !== null);

        if (availableMoves.length === 0) return;

        const randomIndex = availableMoves[Math.floor(Math.random() * availableMoves.length)];

        setTimeout(() => {
            if (!gameOver) {
                clickSound.play();
                const newGrid = [...currentGrid];
                newGrid[randomIndex] = 'player2';
                setGrid(newGrid);

                const gameResult = handleCheckWinner(newGrid);
                if (gameResult) {
                    setGameOver(true);
                    setWinner(gameResult);
                    setShowModal(true);
                } else {
                    setCurrentPlayer('player1');
                }
            }
        }, 500);
    };

    const ctxValue = {
        gameOver,
        setGameOver,
        currentPlayer,
        setCurrentPlayer,
        winner,
        setWinner,
        grid,
        setGrid,
        showModal,
        setShowModal,
        checkWinner: handleCheckWinner,
        makeBotMove: handleBotMove
    }

    return (
        <GridContext.Provider value={ctxValue}>
            {children}
        </GridContext.Provider>
    )
}