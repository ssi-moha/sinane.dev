import React from "react";

type CenterProps = {
  children: React.ReactNode;
};

const Center = ({ children }: CenterProps) => {
  return <div style={{ textAlign: "center" }}>{children}</div>;
};

export default Center;
