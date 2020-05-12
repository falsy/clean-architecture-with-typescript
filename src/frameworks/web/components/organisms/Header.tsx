import * as React from "react";
import { useDispatch } from "react-redux";
import presenters from '@adapters/presenters';
import ShortBtn from '../atoms/ShortBtn';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(presenters.session.removeToken());
  };

  return (
    <section className={"header"}>
      <h1>React with Clean architecture</h1>
      <div className={"btn-area"}>
        <ShortBtn type="button" onClick={handleClickLogout} value="Logout" />
      </div>
    </section>
  );
};


export default Header;