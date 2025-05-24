import { createContext } from "react";

export const PlayerContext = createContext({
    BattleMode: '',
    setBattleMode: () => { },
    player1Name: 'Player 1',
    setPlayer1Name: () => { },
    player2Name: 'Player 2',
    setPlayer2Name: () => { },
    player1Category: 'animals',
    setPlayer1Category: () => { },
    player2Category: 'food',
    setPlayer2Category: () => { },
})