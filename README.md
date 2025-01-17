# Tic Tac Toe 🎮

Welcome to **Tic-Tac-Toe**, a classic game built with **React**! This project follows React's best practices and serves as a learning exercise for building interactive UIs.

## ✨ Features

- **Classic gameplay**: Enjoy the classic Tic-Tac-Toe experience.
- **Move history**: Revisit past moves to learn and strategize.
- **Move sorting**: Toggle move history between ascending and descending order.
- **Winning highlights**: Visualize the winning line when a player wins.
- **Draw detection**: Know when the match ends in a tie.
- **Move locations**: View the row and column of each move in the history.

## 🛠️ Technical Overview

This application uses the following:

- **React functional components** with hooks for state management.
- Modular structure with reusable components (`Board`, `Square`).
- **Custom utility functions** for win detection and formatting data.
- Clean and responsive UI.

### Key React Concepts Used:

- **State lifting**: Sharing state between `Game`, `Board`, and `Square`.
- **Immutability**: Creating new state objects without mutating existing ones.
- **Conditional rendering**: Dynamic UI updates based on game state.
- **Map functions**: Rendering lists (moves and squares) dynamically.

## 🚀 Installation & Running Steps

Follow these steps to get started with the Tic-Tac-Toe app:

### 1️⃣ Clone the repository:

```bash
git clone https://github.com/your-username/tic-tac-toe-react.git
cd tic-tac-toe-react
```

### 2️⃣ Install dependencies:

```bash
npm install
```

### 3️⃣ Start the development server:

```bash
npm start
```

### 4️⃣ Play the game:

```bash
http://localhost:3000
```

## 🕹️ How to Play

1. Click on a square to place your marker (X or O).
2. Take turns with another player to form a line horizontally, vertically, or diagonally.
3. Check the move history to jump to any previous move.
4. Use the sort toggle to reorder the move history.

## 🤔 Want to Contribute?

Feel free to fork this repository, make changes, and submit a pull request. Have ideas for new features or enhancements? Open an issue, and let's discuss!

## 🥳 Special Thanks

A big thank you to the React community and the official [React tutorial][def] for inspiring this project. 💙

[def]: https://react.dev/learn/tutorial-tic-tac-toe
