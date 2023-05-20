import { FC, InputHTMLAttributes } from "react";

const File: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <label className="file-container" htmlFor="file">
      <div>Import Image from Device</div>
      <input {...props} type="file" id="file" name="file" />
    </label>
  );
};

export default File;
