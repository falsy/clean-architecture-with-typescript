import * as className from 'classnames/bind';
import * as React from "react";
import { useDispatch } from "react-redux";
import { setToken } from '../../../redux/session';
import SessionPresenter from '@presenters/Session';
import Authorization from '../../templates/authorization';
import * as styles from './index.scss';

const cx = className.bind(styles);

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const handleClickAccreditation = async (id: string, pw: string) => {
    const { results: { token } } = await SessionPresenter.login(id, pw);
    SessionPresenter.addToken(token)
    dispatch(setToken(token));
  };

  return (
    <div className={cx("login")}>
      <Authorization accredit={handleClickAccreditation} btnValue="Login" />
    </div>
  );
};

export default Login;