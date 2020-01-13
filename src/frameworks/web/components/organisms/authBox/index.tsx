import * as className from 'classnames/bind';
import * as React from "react";
import * as styles from './index.scss';
import AuthForm from '../../molecules/authForm';

const cx = className.bind(styles);

interface Props {
  accredit(id: string, pw: string): void;
  btnValue: string;
}

const AuthBox: React.FC<Props> = (props) => {

  const { accredit, btnValue } = props;

  return (
    <AuthForm accredit={accredit} btnValue={btnValue} />
  );
};

export default AuthBox;