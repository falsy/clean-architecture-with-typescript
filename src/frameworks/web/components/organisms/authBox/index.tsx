import * as className from 'classnames/bind';
import * as React from "react";
import * as styles from './index.scss';
import AuthForm from '../../molecules/authForm';

const cx = className.bind(styles);

interface IProps {
  accredit(id: string, pw: string): void;
  btnValue: string;
}

const AuthBox: React.FC<IProps> = (props) => {

  const { accredit, btnValue } = props;

  return (
    <div className={cx("authorization-box")}>
      <AuthForm accredit={accredit} btnValue={btnValue} />
    </div>
  );
};

export default AuthBox;