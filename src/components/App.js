import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import ToggleTheme from "./ToggleTheme";
import SignIn from "./SignIn.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext, themes } from "../context/theme-context.js";

function App(){
  const [theme, setTheme] = useState(themes.light);

  document.body.style.backgroundColor = theme.backgroundColor; 
  document.body.style.color = theme.textColor; 

 // same as this css 
 // body {
 // background-color: "blue";
 // color: "white";
 //}
  
  function toggleTheme() {
    setTheme(theme => 
      theme.textColor === "AntiqueWhite" ? themes.light : themes.dark
    );

  }
  return ( 
    <Router>
      <ThemeContext.Provider value={theme}>
      <Header />
      <ThemeContext.Consumer>
      {contextTheme => <ToggleTheme theme={contextTheme} toggleTheme={toggleTheme}/>}
      </ThemeContext.Consumer>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<TicketControl />} />
      </Routes>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;