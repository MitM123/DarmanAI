import React, { useState } from 'react'
import Header from '../components/Header'
import back from '../assets/back.png'
import { Link } from 'react-router';

const PlayerDetails = () => {
    const [player1Name, setPlayer1Name] = useState('Player 1');
    const [player2Name, setPlayer2Name] = useState('Player 2');
    const [player1Category, setPlayer1Category] = useState('animals');
    const [player2Category, setPlayer2Category] = useState('food');

    const categories = [
        {
            id: 'animals',
            name: 'Animals',
            emoji: '🐶',
        },
        {
            id: 'food',
            name: 'Food',
            emoji: '🍕',
        },
        {
            id: 'sports',
            name: 'Sports',
            emoji: '⚽',
        }
    ];

    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-100 to-indigo-100 flex flex-col items-center p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6'>
            <div className="flex items-center justify-center mb-2 sm:mb-4 w-full relative">
                <div className='absolute top-0 left-0 cursor-pointer'>
                    <Link to="/">
                        <img src={back} alt="back" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                    </Link>
                </div>
                <Header />
            </div>

            <div className="flex items-center justify-center font-monasans w-full max-w-4xl">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full">
                    <div className="flex flex-col items-center w-full sm:w-auto">
                        <input
                            type="text"
                            value={player1Name}
                            onChange={(e) => setPlayer1Name(e.target.value)}
                            className="w-full sm:w-48 px-3 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm border-2 border-slate-200/60 rounded-xl text-center text-slate-700 font-medium shadow-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-200 placeholder-slate-400 text-sm sm:text-base"
                            placeholder="Enter player 1 name"
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-sm sm:text-base lg:text-lg">VS</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full sm:w-auto">
                        <input
                            type="text"
                            value={player2Name}
                            onChange={(e) => setPlayer2Name(e.target.value)}
                            className="w-full sm:w-48 px-3 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm border-2 border-slate-200/60 rounded-xl text-center text-slate-700 font-medium shadow-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-200 placeholder-slate-400 text-sm sm:text-base"
                            placeholder="Enter player 2 name"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full max-w-6xl font-monasans space-y-6 sm:space-y-8">
                <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-700 text-center mb-3 sm:mb-4">
                        {player1Name} - Choose Your Category
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
                        {categories.map((category) => (
                            <label key={category.id} className="cursor-pointer flex-1 sm:flex-none">
                                <input
                                    type="radio"
                                    name="player1Category"
                                    value={category.id}
                                    checked={player1Category === category.id}
                                    onChange={(e) => setPlayer1Category(e.target.value)}
                                    className="sr-only peer"
                                />
                                <div className="bg-white/80 backdrop-blur-sm border-2 border-slate-200/60 rounded-xl p-3 sm:p-4 shadow-sm transition-all duration-200 peer-checked:border-blue-400 peer-checked:bg-blue-50/80 hover:border-slate-300/80 hover:shadow-md sm:min-w-[160px]">
                                    <div className="text-center">
                                        <div className="text-xl sm:text-2xl mb-1">{category.emoji}</div>
                                        <h4 className="font-medium text-slate-700 mb-2 text-xs sm:text-sm">{category.name}</h4>
                                    </div>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-700 text-center mb-3 sm:mb-4">
                        {player2Name} - Choose Your Category
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
                        {categories.map((category) => (
                            <label key={category.id} className="cursor-pointer flex-1 sm:flex-none">
                                <input
                                    type="radio"
                                    name="player2Category"
                                    value={category.id}
                                    checked={player2Category === category.id}
                                    onChange={(e) => setPlayer2Category(e.target.value)}
                                    className="sr-only peer"
                                />
                                <div className="bg-white/80 backdrop-blur-sm border-2 border-slate-200/60 rounded-xl p-3 sm:p-4 
                                shadow-sm transition-all duration-200 peer-checked:border-rose-400 peer-checked:bg-rose-50/80 hover:border-slate-300/80 
                                hover:shadow-md sm:min-w-[160px]">
                                    <div className="text-center">
                                        <div className="text-xl sm:text-2xl mb-1">{category.emoji}</div>
                                        <h4 className="font-medium text-slate-700 mb-2 text-xs sm:text-sm">{category.name}</h4>
                                    </div>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlayerDetails