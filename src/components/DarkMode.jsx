import { useState } from "react";

export default function DarkMode() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);

    isDarkTheme
      ? (document.body.classList = "light-theme")
      : (document.body.classList = "dark-theme ");
  };

  return (
    <>
      <div className="app">
        <p>The background is {isDarkTheme ? "dark" : "light"}</p>
      </div>
      <button className="app-button" onClick={toggleTheme}>
        Change theme!
      </button>
    </>
  );
}
