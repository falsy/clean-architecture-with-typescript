import * as className from 'classnames/bind';
import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Presenters from '../../../../../domains/interfaces/presenters';
import Actions from '../../../../../domains/interfaces/frameworks';
import * as styles from './login.scss';

const cx = className.bind(styles);

interface Props {
  presenters: Presenters;
  actions: Actions;
}

const Login: React.FC<Props> = (props) => {
  const { presenters, actions } = props;
  const dispatch = useDispatch();
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  const handleChangeLoginInfo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const updateFnc = event.target.name === 'id' ? setId : setPw;
    updateFnc(event.target.value);
  };

  const requestLogin = () => {
    dispatch(actions.session.login(id, pw));
  };

  return (
    <div className={cx("login")}>
      <section>
        <div className={cx("login-id")}>
          <input type="text" name="id" placeholder="ID" onChange={handleChangeLoginInfo} />
        </div>
        <div className={cx("login-pw")}>
          <input type="text" name="pw" placeholder="Password" onChange={handleChangeLoginInfo} />
        </div>
        <div className={cx("login-btn")}>
          <button type="button" onClick={requestLogin}>Login</button>
        </div>
      </section>
    </div>
  );
};

export default Login;