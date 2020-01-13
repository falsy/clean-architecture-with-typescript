import * as className from 'classnames/bind';
import * as React from "react";
import { useDispatch } from "react-redux";
import Presenters from '../../../../../domains/interfaces/presenters';
import Actions from '../../../../../domains/interfaces/frameworks';
import Authorization from '../../templates/authorization';
import * as styles from './index.scss';

const cx = className.bind(styles);

interface Props {
  presenters: Presenters;
  actions: Actions;
}

const Login: React.FC<Props> = (props) => {
  const { presenters, actions } = props;
  const dispatch = useDispatch();

  const handleClickAccreditation = (id: string, pw: string) => {
    dispatch(actions.session.login(id, pw));
  };

  return (
    <div className={cx("login")}>
      <Authorization accredit={handleClickAccreditation} btnValue="Login" />
    </div>
  );
};

export default Login;