import React from "react";
import { SelectProps } from "../../constants/type";

const Select: React.FC<SelectProps> = ({
  options,
  wrapperClassName,
  ...rest
}) => {
  return (
    <div className={`custom-input custom-select ${wrapperClassName || ""}`}>
      <select {...rest}>
        {options?.map(({ title, value }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
