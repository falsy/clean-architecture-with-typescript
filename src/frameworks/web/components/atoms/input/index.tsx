import * as className from 'classnames/bind';
import * as React from "react";
import * as styles from './index.scss';

const cx = className.bind(styles);

interface IProps {
  type: string;
  name: string;
  placeholder: string;
  value: string | number;
  onChange(evnet: React.ChangeEvent<HTMLInputElement>): void;
  onKeyDown(event: React.KeyboardEvent): void;
}

const Input: React.FC<IProps> = (props) => {
  const { type, name, placeholder, onChange, onKeyDown, value } = props;

  return (
    <input className={cx("input")} type={type} name={name} placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown} value={value} />
  );
};

export default Input;