import { useState } from "react"
import { GridContext } from "./GridContexts"

export default function GridContextProvider({ children }) {
    const [currentPlayer, setCurrentPlayer] = useState('player1')
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

    const ctxValue = {
        gameOver,
        setGameOver,
        currentPlayer,
        setCurrentPlayer,
        winner,
        setWinner,
        checkWinner: handleCheckWinner,
    }

    return (
        <GridContext.Provider value={ctxValue}>
            {children}
        </GridContext.Provider>
    )
}