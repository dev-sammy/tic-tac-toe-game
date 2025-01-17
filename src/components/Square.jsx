export default function Square({ value, onSquareClick, highlight = false }) {
  const className = `square${highlight ? " highlight" : ""}`;
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}
