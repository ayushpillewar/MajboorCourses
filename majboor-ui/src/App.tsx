
import { useState } from "react";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./components/AboutMe";


function App() {

  // state variables
  const [activeNav, setActiveNav] = useState("home");
  return (
    <>
      <Menu activeNav={activeNav} setActiveNav={setActiveNav}/>
      { activeNav === "about" ? <AboutMe/> : null }
    </>
    
  );
}

export default App;
