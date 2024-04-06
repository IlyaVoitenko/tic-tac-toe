import style from "./style.module.css";
import { useState } from "react";
import Square from "../Square";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isValueX, setIsValueX] = useState(true);
  let isWinner = false;
  let winner = null;

  const checkWinner = () => {
    const winnerCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combination of winnerCombinations) {
      let [a, b, c] = combination;
      if (square[a] && square[a] === square[b] && square[b] === square[c]) {
        isWinner = true;
        return square[a];
      }
    }
    return null;
  };

  const setSquareValue = (itemSquare) => {
    const newSquare = square.slice();
    if (isWinner) window.location.reload();
    if (newSquare[itemSquare]) return;
    isValueX ? (newSquare[itemSquare] = "X") : (newSquare[itemSquare] = "O");
    setIsValueX(!isValueX);
    setSquare(newSquare);
  };
  winner = checkWinner();
  return (
    <div>
      {winner && <h4> winner is {winner}</h4>}
      <div className={style.container}>
        {square.map((square, index) => (
          <Square
            key={index}
            value={square}
            setSquareValue={() => setSquareValue(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
