import React, { useState } from 'react'

const Grid = ({ player1Name, player2Name, player1Category, player2Category }) => {
  const [grid, setGrid] = useState(Array(9).fill(''))
  const [currentPlayer, setCurrentPlayer] = useState('player1')
  const [gameOver, setGameOver] = useState(false)

  const categories = {
    animals: {
      id: 'animals',
      name: 'Animals',
      emoji: '🐶',
    },
    food: {
      id: 'food',
      name: 'Food',
      emoji: '🍕',
    },
    sports: {
      id: 'sports',
      name: 'Sports',
      emoji: '⚽',
    }
  }

  const getCurrentPlayerIcon = () => {
    if (currentPlayer === 'player1') {
      return categories[player1Category].emoji || '🐶'
    } else {
      return categories[player2Category].emoji || '🍕'
    }
  }

  const getCurrentPlayerName = () => {
    return currentPlayer === 'player1' ? player1Name : player2Name
  }

  const checkWinner = (newGrid) => {
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

  const handleCellClick = (index) => {
    if (grid[index] || gameOver) return

    const newGrid = [...grid]
    newGrid[index] = currentPlayer
    setGrid(newGrid)

    const gameResult = checkWinner(newGrid)
    if (gameResult) {
      setGameOver(true)
      setWinner(gameResult)
      setShowModal(true)
    } else {
      setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1')
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center p-8 space-y-8 transition-all duration-500 ease-out">
        <div className="text-center space-y-4 transition-all duration-300">
          {!gameOver && (
            <p className="text-2xl text-slate-700 font-semibold transition-all duration-500 ease-out transform hover:scale-105">
              <span className="text-indigo-600 transition-colors duration-300">{getCurrentPlayerName()}</span>'s Turn {getCurrentPlayerIcon()}
            </p>
          )}
        </div>

        <div className="relative transition-all duration-500 ease-out transform hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 rounded-3xl blur-xl opacity-20 transition-opacity duration-500"></div>

          <div className="relative bg-white/30 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20 transition-all duration-500 hover:shadow-3xl">
            <div className="grid grid-cols-3 gap-4 w-80 h-80">
              {grid.map((cell, index) => (
                <button
                  key={index}
                  onClick={() => handleCellClick(index)}
                  disabled={gameOver}
                  className="group relative bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 
                           hover:bg-white/60 hover:shadow-xl hover:scale-105 
                           active:scale-95 transition-all duration-300 ease-out
                           focus:outline-none focus:ring-4 focus:ring-indigo-300/50
                           disabled:cursor-not-allowed overflow-hidden
                           w-full h-full aspect-square flex items-center justify-center"
                >
                  <div className="relative z-10 flex items-center justify-center">
                    {
                      cell && (
                        <span className="text-5xl font-bold select-none drop-shadow-lg">
                          {cell === 'player1' ? categories[player1Category]?.emoji : categories[player2Category]?.emoji}
                        </span>
                      )
                    }
                  </div>

                  {
                    !cell && !gameOver && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-200/50 to-purple-200/50 
                    opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out animate-pulse"></div>
                    )
                  }

                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-white/30 scale-0 group-active:scale-100 
                    transition-transform duration-300 ease-out rounded-2xl"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          className="group relative cursor-pointer px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 
                     text-white font-bold text-lg rounded-2xl shadow-lg
                     hover:from-indigo-600 hover:to-purple-700 hover:shadow-xl hover:scale-105
                     active:scale-95 transition-all duration-300 ease-out
                     focus:outline-none focus:ring-4 focus:ring-indigo-300/50
                     overflow-hidden transform"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 
                         opacity-0 group-hover:opacity-20 transition-all duration-500 ease-out blur-xl"></div>

          <span className="relative z-10 transition-all duration-300">🔄 New Game</span>
        </button>

      </div>

    </>
  )
}

export default Grid