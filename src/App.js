import "./App.css";
import Home from "./Components/Home/Home";
import InsideMedicine from "./Components/Medicine/InsideMedicine";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/InsideMedicine" element={<InsideMedicine />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
