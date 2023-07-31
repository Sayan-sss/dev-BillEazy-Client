import "./App.css";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import InvoiceViewer from "./Components/Invoice/invoice.viewer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsideMedicineContainer from "./Components/Medicine/InsideMedicineContainer";
import Invoicegenerator from "./Components/Invoice/invoice.generator";
import Invoicecreator from "./Components/Invoice/invoice.creator";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/InsideMedicine"
          element={<InsideMedicineContainer />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/invoice" element={<InvoiceViewer />}></Route>
        <Route path="/addinvoice" element={<Invoicegenerator />}></Route>
        <Route path="/invoice/create" element={<Invoicecreator />}></Route>
      </Routes>
    </div>
  );
}

export default App;
