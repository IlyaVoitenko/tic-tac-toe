import style from "./style.module.css";

const Square = ({ value, setSquareValue }) => {
  return (
    <div className={style.SquareItem} onClick={setSquareValue}>
      {value}
    </div>
  );
};

export default Square;
