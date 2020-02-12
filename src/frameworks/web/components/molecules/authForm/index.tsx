import * as className from 'classnames/bind';
import * as React from "react";
import { useState } from "react";
import Input from '../../atoms/input';
import LongBtn from '../../atoms/longBtn';
import * as styles from './index.scss';

const cx = className.bind(styles);

interface IProps {
  accredit(id: string, pw: string): void;
  btnValue: string;
}

const AuthForm: React.FC<IProps> = (props) => {

  const { accredit, btnValue } = props;
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  const handleChangeClientInfo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const updateFnc = event.target.name === 'id' ? setId : setPw;
    updateFnc(event.target.value);
  };

  const handleClickAccredit = () => {
    accredit(id, pw);
  };

  const handleKeyDownAccredit = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13) {
      accredit(id, pw);
    }
  };

  return (
    <section>
      <div className={cx("client-id")}>
        <Input type="text" name="id" placeholder="ID" onChange={handleChangeClientInfo} onKeyDown={null} />
      </div>
      <div className={cx("client-pw")}>
        <Input type="text" name="pw" placeholder="Password" onChange={handleChangeClientInfo} onKeyDown={handleKeyDownAccredit} />
      </div>
      <div className={cx("client-btn")}>
        <LongBtn type="button" onClick={handleClickAccredit} value={btnValue} />
      </div>
    </section>
  );
};

export default AuthForm;