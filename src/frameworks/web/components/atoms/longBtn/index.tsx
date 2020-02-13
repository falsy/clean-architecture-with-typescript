import * as className from 'classnames/bind';
import * as React from "react";
import * as styles from './index.scss';

const cx = className.bind(styles);

interface IProps {
  type: "button" | "submit" | "reset";
  value: string;
  onClick(): void;
}

const LongBtn: React.FC<IProps> = (props) => {
  const { type, value, onClick } = props;

  return (
    <button className={cx("button")} type={type} onClick={onClick}>{value}</button>
  );
};

export default LongBtn;