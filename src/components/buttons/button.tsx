import { FC } from "react";
import { ButtonProps } from "../../constants/type";

const Button: FC<ButtonProps> = ({
  children,
  outlined,
  className,
  ...props
}) => {
  return (
    <button
      className={`custom-button ${outlined ? "outlined" : ""} ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
