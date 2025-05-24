# Emoji Tic-Tac-Toe 🎮

A modern twist on classic Tic-Tac-Toe using emojis with special gameplay rules!

## Tech Stack
- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Audio**: Howler.js for sound effects

## Game Features
### Emoji Categories
Players can choose from three fun emoji categories:
- 🐶 **Animals** (Default for Player 1)
- 🍕 **Food** (Default for Player 2)
- ⚽ **Sports**

### Special Rules Implementation
1. **3-Emoji Limit**: Each player can only have 3 emojis on the board at any time
2. **FIFO Removal**: When placing a 4th emoji, the oldest emoji is automatically removed
3. **Placement Restriction**: The 4th emoji cannot be placed where the 1st emoji was

*Note: I tried my best to implement the visual "vanishing" effect when changing emojis or categories. But mixing it with the FIFO system made it tricky — so I’ve done as much as possible for now.*

## How to Play
1. Select battle mode (vs Bot or vs Friend)
2. Choose your emoji categories
3. Take turns placing emojis
4. First to get 3 in a row wins!

## Future Improvements
With more time, I would:
- Create responsive animations for emoji placement
- Enhance Battle Mode to support both Bot and Friend battles in the same gameplay environment
- smoother transitions and game management

## Installation
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev` 