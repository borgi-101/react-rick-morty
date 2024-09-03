import React, { useState } from "react";
import Characters from "./components/Characters";
import ThemeContext from "./contexts/ThemeContext";
import Header from "./components/Header";
import "./styles/App.scss"

const App = () => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <ThemeContext.Provider value={[darkmode, setDarkmode]}>
      <div className={`App ${darkmode ? "dark" : "light"}`}>
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;