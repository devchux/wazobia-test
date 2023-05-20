import { ButtonHTMLAttributes, FC } from "react";

const UploadButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className="upload-button" type="button" {...props}>
      <div>
        <div />
        <div />
      </div>
    </button>
  );
};

export default UploadButton;
