import style from "./style.module.css";

const Square = ({ value }) => {
  return <div className={style.SquareItem}>{value}</div>;
};

export default Square;
