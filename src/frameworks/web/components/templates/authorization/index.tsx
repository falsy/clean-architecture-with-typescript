import * as className from 'classnames/bind';
import * as React from "react";
import * as styles from './index.scss';
import AuthBox from '../../organisms/authBox';


const cx = className.bind(styles);

interface IProps {
  accredit(id: string, pw: string): void;
  btnValue: string;
}

const Authorization: React.FC<IProps> = (props) => {

  const { accredit, btnValue } = props;

  return (
    <div className={cx("authorization")}>
      <AuthBox accredit={accredit} btnValue={btnValue} />
    </div>
  );
};

export default Authorization;