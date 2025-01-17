import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      location: { col: 0, row: 0 },
    },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove].squares;
  const [isAscending, setIsAscending] = useState(true);

  const isXTurnNext = currentMove % 2 === 0;
  const sortedHistory = isAscending ? history : [...history].reverse();

  const moves = sortedHistory.map((step, index) => {
    const moveIndex = isAscending ? index : history.length - 1 - index;
    const location = `[${step.location.row + 1}, ${step.location.col + 1}]`;
    const description = moveIndex
      ? `Go to Move #${moveIndex} ${location}`
      : "Go to Start";

    return (
      <li key={moveIndex}>
        {currentMove === moveIndex ? (
          <span className="current-step">
            You are at move #{currentMove} {location}
          </span>
        ) : (
          <button className="moves" onClick={() => jumpToMove(moveIndex)}>
            {description}
          </button>
        )}
      </li>
    );
  });

  const handleGamePlay = (squares, row, col) => {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares, location: { row, col } },
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpToMove = (move) => {
    setCurrentMove(move);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          onPlay={handleGamePlay}
          isXTurnNext={isXTurnNext}
          squares={currentSquares}
        />
      </div>
      <div className="game-info">
        <p>Moves:</p>
        <button
          className="sort-moves"
          type="button"
          onClick={() => setIsAscending(!isAscending)}
        >
          Sort Order:{isAscending ? " Descending" : " Ascending"}
        </button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
