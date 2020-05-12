import * as React from "react";

interface IProps {
  type: "button" | "submit" | "reset";
  value: string;
  onClick(): void;
}

const LongBtn: React.FC<IProps> = (props) => {
  const { type, value, onClick } = props;

  return (
    <button className={"button"} type={type} onClick={onClick}>{value}</button>
  );
};

export default LongBtn;