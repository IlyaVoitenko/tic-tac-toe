import style from "./style.module.css";
import { useState } from "react";
import Square from "../Square";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isValueX, setIsValueX] = useState(true);

  const setSquareValue = (itemSquare) => {
    const newSquare = square.slice();
    isValueX ? (newSquare[itemSquare] = "X") : (newSquare[itemSquare] = "O");
    setIsValueX(!isValueX);
    setSquare(newSquare);
  };

  return (
    <div className={style.container}>
      {square.map((square, index) => (
        <Square
          key={index}
          value={square}
          setSquareValue={() => setSquareValue(index)}
        />
      ))}
    </div>
  );
};

export default Board;
