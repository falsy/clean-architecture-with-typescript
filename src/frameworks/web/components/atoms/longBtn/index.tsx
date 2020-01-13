import * as className from 'classnames/bind';
import * as React from "react";
import * as styles from './index.scss';

const cx = className.bind(styles);

interface Props {
  type: "button" | "submit" | "reset";
  value: string;
  onClick(): void;
}

const LongBtn: React.FC<Props> = (props) => {
  const { type, value, onClick } = props;

  return (
    <button className={cx("button")} type={type} onClick={onClick}>{value}</button>
  );
};

export default LongBtn;