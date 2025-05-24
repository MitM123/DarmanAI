import { useState } from "react";
import { PlayerContext } from "./PlayerContexts";


export default function PlayerContextProvider({ children }) {
    const [BattleMode, setBattleMode] = useState('');
    const [player1Name, setPlayer1Name] = useState('Player 1');
    const [player2Name, setPlayer2Name] = useState('Player 2');
    const [player1Category, setPlayer1Category] = useState('animals');
    const [player2Category, setPlayer2Category] = useState('food');
    // console.log('Battle Mode:', BattleMode);
    const ctxValue = {
        BattleMode,
        setBattleMode,
        player1Name,
        setPlayer1Name,
        player2Name,
        setPlayer2Name,
        player1Category,
        setPlayer1Category,
        player2Category,
        setPlayer2Category,
    };

    return (
        <PlayerContext.Provider value={ctxValue}>
            {children}
        </PlayerContext.Provider>
    )
}