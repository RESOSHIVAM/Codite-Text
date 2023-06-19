import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  // const [count, setCount] = useState(0);
  const [mode, setMode] = useState("light"); //check whether dark mode is enable or not..
  const [alert, setAlert] = useState(null); //use to set the state variable..

  const showAlert = (message, type) => {
    //funtion to show alert msg..
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#242420";
      showAlert("Dark Mode has been Enable.", "success");

      // setInterval(() => {   // these some line of code is use for change the title for every seconds.
      //   document.title = 'Codite is Amazing.';
      // } , 1500);
      // setInterval(() => {
      //   document.title = 'Subscribe Codite.';
      // } , 3000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enable.", "success");
    }
  };

  return (
    <>
      <Navbar
        title="CoDite"
        mode={mode}
        toggleMode={toggleMode}
        key={new Date()}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                showAlert={showAlert}
                heading="Enter the Text to analyse."
                mode={mode}
              />
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
