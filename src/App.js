import "./App.css";
import { Box } from "@mui/material";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import InvoiceViewer from "./Components/Invoice/invoice.viewer";
import SideBar from "./Components/Sidebar/sidebar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsideMedicineContainer from "./Components/Medicine/InsideMedicineContainer";
import Invoicegenerator from "./Components/Invoice/invoice.generator";
import Invoicecreator from "./Components/Invoice/invoice.creator";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "20vw",
          }}
        >
          <SideBar />
        </Box>
        <Box
          sx={{
            width: "80vw",
            display: "flex",
            // flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
            border: "1px solid green",
          }}
        >
          <Routes>
            <Route
              path="/medicines"
              element={<InsideMedicineContainer />}
            ></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route
              path="/Invoicegenerator"
              element={<Invoicegenerator />}
            ></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<InsideMedicineContainer />}></Route>
            <Route path="/invoice" element={<InvoiceViewer />}></Route>
            <Route
              path="/InsideMedicine"
              element={<InsideMedicineContainer />}
            ></Route>
            <Route path="/addinvoice" element={<Invoicegenerator />}></Route>
            <Route path="/invoice/create" element={<Invoicecreator />}></Route>
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default App;
