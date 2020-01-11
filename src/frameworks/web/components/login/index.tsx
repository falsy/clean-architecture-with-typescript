import * as className from 'classnames/bind';
import * as React from "react";
import { useState } from "react";
import Presenters from '../../../../domains/interfaces/presenters';
import Actions from '../../../../domains/interfaces/frameworks';
import * as styles from './login.scss';

const cx = className.bind(styles);

interface Props {
  presenters: Presenters;
  actions: Actions;
}

const Login: React.FC<Props> = (props) => {
  const { presenters, actions } = props;

  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  const handleChangeLoginInfo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const updateFnc = event.target.name === 'id' ? setId : setPw;
    updateFnc(event.target.value);
  };

  const requestLogin = () => {
    // console.log(id, pw);
    actions.session.login(id, pw);
  };

  return (
    <div className={cx("login")}>
      <div className={cx("login-id")}>
        <input type="text" name="id" placeholder="ID" onChange={handleChangeLoginInfo} />
      </div>
      <div className={cx("login-pw")}>
        <input type="text" name="pw" placeholder="Password" onChange={handleChangeLoginInfo} />
      </div>
      <div className={cx("login-btn")}>
        <button type="button" onClick={requestLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;