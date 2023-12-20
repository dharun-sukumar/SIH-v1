import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import MapPage from "./components/Map";
import Analytics from "./components/Analytics";
import Test from "./components/Test";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Main />}/>
            <Route exact path="/map" element={<MapPage />}/>
            <Route exact path="/analytics" element={<Analytics />}/>
            <Route exact path="/test" element={<Test />}/>
        </Routes>
    </div>
</Router>
);
}

export default App;
