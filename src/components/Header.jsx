import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Header = () => {
  const [darkmode, setDarkmode] = useContext(ThemeContext);
  return (
    <header className="Header">
      <h1>{darkmode ? "Dark" : "Light"} Rick and Morty</h1>

      <button
        onClick={() => {
          setDarkmode(!darkmode);
        }}
      >
        {darkmode ? "Go to LightMode" : "Go to Darkmode"}
      </button>
    </header>
  );
};

export default Header;
