import style from "./style.module.css";
import { useState } from "react";
import Square from "../Square";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  return (
    <div className={style.container}>
      {square.map((square, index) => (
        <Square key={index} value={square} />
      ))}
    </div>
  );
};

export default Board;
