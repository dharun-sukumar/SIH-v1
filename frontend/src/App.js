import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Map from "./components/Map";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Main />}/>
            <Route exact path="/map" element={<Map />}/>
        </Routes>
    </div>
</Router>
);
}

export default App;
