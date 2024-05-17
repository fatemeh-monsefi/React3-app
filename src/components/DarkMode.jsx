import { useState } from "react";

// so here I was confused whether to add the class to body or to div so I wrote two versions in order to accomplish what you wanted

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

// second version =======

// export default function DarkMode() {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkTheme(!isDarkTheme);
//   };

//   return (
//     <>
//       <div className={`app ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
//         <p>The background is {isDarkTheme ? "dark" : "light"}</p>
//       </div>
//       <button className="app-button" onClick={toggleTheme}>
//         Change theme!
//       </button>
//     </>
//   );
// }
