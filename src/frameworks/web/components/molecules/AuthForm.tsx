import * as React from "react";
import { useState } from "react";
import Input from '../atoms/Input';
import LongBtn from '../atoms/LongBtn';

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
      <div className={"client-id"}>
        <Input type="text" name="id" placeholder="ID" onChange={handleChangeClientInfo} onKeyDown={null} value={id} />
      </div>
      <div className={"client-pw"}>
        <Input type="text" name="pw" placeholder="Password" onChange={handleChangeClientInfo} onKeyDown={handleKeyDownAccredit} value={pw} />
      </div>
      <div className={"client-btn"}>
        <LongBtn type="button" onClick={handleClickAccredit} value={btnValue} />
      </div>
    </section>
  );
};

export default AuthForm;