import "./App.css";
import { Box } from "@mui/material";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import InvoiceViewer from "./Components/Invoice/invoice.viewer";
import SideBar from "./Components/Sidebar/sidebar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsideMedicineContainer from "./Components/Medicine/InsideMedicineContainer";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SideBar />
        <Routes>
          <Route
            path="/medicines"
            element={<InsideMedicineContainer />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/invoice" element={<InvoiceViewer />}></Route>
        </Routes>
      </Box>
    </div>
  );
}

export default App;
