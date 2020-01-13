import * as className from 'classnames/bind';
import * as React from "react";
import * as styles from './index.scss';

const cx = className.bind(styles);

interface Props {
  type: string;
  name: string;
  placeholder: string;
  onChange(evnet: React.ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<Props> = (props) => {
  const { type, name, placeholder, onChange } = props;

  return (
    <input className={cx("input")} type={type} name={name} placeholder={placeholder} onChange={onChange} />
  );
};

export default Input;