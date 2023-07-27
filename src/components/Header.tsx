import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "16px",
        background: "#ccc",
      }}
    >
      <Link to="/">main</Link>
      <Link to="/:id">main2</Link>
    </div>
  );
};

export default Header;
