import React, { ReactNode, useContext } from "react";
import { EditorContext } from "../context/editor";
import Button from "../components/buttons/button";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { controls } = useContext(EditorContext);

  return (
    <div className="page-layout">
      <div className="main-wrapper">
        <div className="header" />
        <div className="content-wrapper">{children}</div>
        <div className="footer">
          <p>
            {controls.count}/{controls.max} words
          </p>
        </div>
      </div>
      <div className="button-wrapper">
        <Button>Post</Button>
      </div>
    </div>
  );
};

export default Layout;
