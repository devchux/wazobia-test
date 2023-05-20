import React from "react";
import { InpputProps } from "../../constants/type";

const Input: React.FC<InpputProps> = ({ wrapperClassName, ...rest }) => {
  return (
    <div className={`custom-input ${wrapperClassName || ""}`}>
      <input {...rest} />
    </div>
  );
};

export default Input;
