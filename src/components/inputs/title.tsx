import { useState } from "react";

const Title = () => {
  const [state, setState] = useState("This is the title");

  return (
    <div className="title-input">
      <input
        type="text"
        value={state}
        onChange={({ target: { value } }) => setState(value)}
      />
    </div>
  );
};

export default Title;
