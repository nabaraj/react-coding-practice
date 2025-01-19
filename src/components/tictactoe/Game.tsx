import { useState } from "react";
import "./game.css";
const defaultBoard = Array(9).fill(null);

const calculateWinner = (board: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      console.log(board[a]);
      return board[a];
    }
  }
  return "";
};
export const Game = () => {
  const [boardLayout, setBoardLayout] = useState<string[]>(defaultBoard);
  const [winner, setWinner] = useState<string | null>("");
  const [isPlayerX, setIsPlayerX] = useState(true);

  const updateTable = (index: number) => {
    // console.log(index);
    // updateTable(isPlayerX, index);
    if (winner) return;
    const boardLayoutCopy = boardLayout.slice();
    // const matchWinner = calculateWinner(boardLayoutCopy);
    // if (boardLayoutCopy[index] || calculateWinner(boardLayoutCopy)) return;
    boardLayoutCopy[index] = isPlayerX ? "X" : "O";

    const matchWinner = calculateWinner(boardLayoutCopy);
    console.log({ matchWinner });
    setWinner(matchWinner);
    setBoardLayout(boardLayoutCopy);
    setIsPlayerX(!isPlayerX);
  };

  const resetTable = () => {
    setBoardLayout(defaultBoard);
    setWinner("");
    setIsPlayerX(true);
  };

  return (
    <div>
      <h5>winner is {winner}</h5>
      <button onClick={resetTable}>Reset</button>
      <div className='boardRow flex'>
        {boardLayout.map((square, index) => {
          return (
            <div className='square' onClick={() => updateTable(index)}>
              {square ? square : index}
            </div>
          );
        })}
      </div>
    </div>
  );
};
