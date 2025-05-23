import React, { useState } from 'react'
import Header from '../components/Header'
import back from '../assets/back.png'
import { Link } from 'react-router';
import Grid from '../components/Grid';

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

    const handlePlayer1CategoryChange = (selectedCategory) => {
        setPlayer1Category(selectedCategory);
        if (player2Category === selectedCategory) {
            const availableCategories = categories.filter(cat => cat.id !== selectedCategory);
            // console.log(availableCategories);
            setPlayer2Category(availableCategories[0].id);
        }
    };

    const handlePlayer2CategoryChange = (selectedCategory) => {
        setPlayer2Category(selectedCategory);

        if (player1Category === selectedCategory) {
            const availableCategories = categories.filter(cat => cat.id !== selectedCategory);
            setPlayer1Category(availableCategories[0].id);
        }
    };

    return (
        <div className='min-h-screen w-full overflow-y-scroll bg-gradient-to-br font-monasans from-slate-50 via-blue-100 to-indigo-100 flex flex-col items-center p-2 space-y-2'>
            <div className="w-full h-[25vh] flex flex-col justify-between">
                <div className="flex items-center justify-center w-full relative">
                    <div className='absolute top-0 left-0 cursor-pointer'>
                        <Link to="/">
                            <img src={back} alt="back" className="w-[3vw]" />
                        </Link>
                    </div>
                    <div className="scale-80">
                        <Header />
                    </div>
                </div>

                <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full px-2 sm:px-4">
                    <div className="flex flex-col items-center gap-2 w-[20%]">
                        <input
                            type="text"
                            value={player1Name}
                            onChange={(e) => setPlayer1Name(e.target.value)}
                            className="w-full px-3 py-1 sm:px-4 sm:py-1.5 bg-white/80 backdrop-blur-sm border-2 border-slate-200/60 rounded-lg text-center text-slate-700 font-medium shadow-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-200 placeholder-slate-400 text-sm sm:text-base"
                            placeholder="Player 1"
                        />

                        <div className="flex gap-1 sm:gap-2 w-full justify-center">
                            {categories.map((category) => (
                                <label key={category.id} className="cursor-pointer flex-1 max-w-[33%]">
                                    <input
                                        type="radio"
                                        name="player1Category"
                                        value={category.id}
                                        checked={player1Category === category.id}
                                        onChange={(e) => handlePlayer1CategoryChange(e.target.value)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-full py-2 bg-white/80 backdrop-blur-sm border-2 border-slate-200/60 rounded-lg shadow-sm transition-all duration-200 peer-checked:border-blue-400 peer-checked:bg-blue-50/80 hover:border-slate-300/80 hover:shadow-md flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-lg sm:text-xl">{category.emoji}</div>
                                        </div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg mx-1 sm:mx-2">
                        <span className="text-white font-bold text-xs sm:text-sm">VS</span>
                    </div>

                    <div className="flex flex-col items-center gap-2 w-[20%]">
                        <input
                            type="text"
                            value={player2Name}
                            onChange={(e) => setPlayer2Name(e.target.value)}
                            className="w-full px-3 py-1 sm:px-4 sm:py-1.5 bg-white/80 backdrop-blur-sm border-2 border-slate-200/60 rounded-lg text-center text-slate-700 font-medium shadow-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-200 placeholder-slate-400 text-sm sm:text-base"
                            placeholder="Player 2"
                        />

                        <div className="flex gap-1 sm:gap-2 w-full justify-center">
                            {categories.map((category) => (
                                <label key={category.id} className="cursor-pointer flex-1 max-w-[33%]">
                                    <input
                                        type="radio"
                                        name="player2Category"
                                        value={category.id}
                                        checked={player2Category === category.id}
                                        onChange={(e) => handlePlayer2CategoryChange(e.target.value)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-full py-2 bg-white/80 backdrop-blur-sm border-2 border-slate-200/60 rounded-lg shadow-sm transition-all duration-200 peer-checked:border-rose-400 peer-checked:bg-rose-50/80 hover:border-slate-300/80 hover:shadow-md flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-lg sm:text-xl">{category.emoji}</div>
                                        </div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="">
                    <Grid player1Category={player1Category} player2Category={player2Category} player1Name={player1Name} player2Name={player2Name} />
                </div>
            </div>
        </div>
    )
}

export default PlayerDetails;