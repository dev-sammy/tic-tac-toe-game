import Square from "./Square";
import { calculateWinner, calculateSquareIndex } from "../utils/calculate";
import { groupArray } from "../utils/format";

const ROW_SIZE = 3;

export default function Board({ isXTurnNext, squares, onPlay }) {
  const board = groupArray(squares, ROW_SIZE);
  const { winner, line } = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner is: ${winner}`;
  } else if (squares.some((square) => square === null)) {
    status = `Next player: ${isXTurnNext ? "X" : "O"}`;
  } else {
    status = `Match Draw`;
  }

  const handleClick = (row, col) => {
    const squareIndex = calculateSquareIndex(row, col, ROW_SIZE);
    const nextSquares = squares.slice();
    if (nextSquares[squareIndex] || winner) return;
    nextSquares[squareIndex] = isXTurnNext ? "X" : "O";
    onPlay(nextSquares, row, col);
  };

  return (
    <>
      {board.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {row.map((square, colIndex) => (
            <Square
              key={colIndex}
              value={square}
              highlight={line.includes(
                calculateSquareIndex(rowIndex, colIndex, ROW_SIZE)
              )}
              onSquareClick={() => handleClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}

      <p className="status">{status}</p>
    </>
  );
}
