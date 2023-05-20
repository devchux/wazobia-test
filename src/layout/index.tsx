import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="page-layout">
      <div className="header" />
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
