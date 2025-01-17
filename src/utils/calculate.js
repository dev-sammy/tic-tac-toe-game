export const calculateWinner = (squares) => {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winnerLines.length; i++) {
    const [first, second, third] = winnerLines[i];

    if (
      squares[first] &&
      squares[first] === squares[second] &&
      squares[first] === squares[third]
    ) {
      return { winner: squares[first], line: winnerLines[i] };
    }
  }

  return { winner: null, line: [] };
};

export const calculateSquareIndex = (row, col, size) => {
  return row * size + col;
};
