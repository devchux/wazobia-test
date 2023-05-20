import React, { ReactNode, useContext } from "react";
import { EditorContext } from "../context/editor";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { controls } = useContext(EditorContext);

  return (
    <div className="page-layout">
      <div className="header" />
      <div className="content-wrapper">{children}</div>
      <div className="footer">
        <p>{controls.count}/{controls.max} words</p>
      </div>
    </div>
  );
};

export default Layout;
