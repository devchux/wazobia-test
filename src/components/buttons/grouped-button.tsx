import { FC } from "react";
import { GroupedButtonProps } from "../../constants/type";
import Button from "./button";

const GroupedButton: FC<GroupedButtonProps> = ({ options }) => {
  return (
    <div className="grouped-button">
      {options?.map(({ children, ...prop }) => (
        <Button {...prop}>{children}</Button>
      ))}
    </div>
  );
};

export default GroupedButton;
