import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      className={`custom-toggle ${isOn ? "is-on" : ""}`}
      onClick={() => setIsOn(!isOn)}
    />
  );
};

export default Toggle;
