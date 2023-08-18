import "./App.css";
import { Box, Paper } from "@mui/material";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import InvoiceViewer from "./Components/Invoice/invoice.viewer";
// import { useNavigate } from "react-router-dom";
import SideBar from "./Components/Sidebar/sidebar.js";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import InsideMedicineContainer from "./Components/Medicine/InsideMedicineContainer";
import InvoiceList from "./Components/Invoice/invoice.list";
import Invoicecreator from "./Components/Invoice/invoice.creator";
import MobileNavabr from "./Components/Navigation Bar/Mobile.Navbar";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import TemporaryDrawer from "./Components/MuuiComponents/Drawer";
import MiniDrawer from "./Components/MuuiComponents/Drawer";
import About from "./Components/About/About";
import { useSelector } from "react-redux";
import Account from "./Components/Account/Account";
import Pricing from "./Components/Pricing/Pricing";
import OurConditions from "./Components/About/OurConditions";
import { Toaster } from "react-hot-toast";
import DeliveryChallanViewer from "./Components/Delivery Challan/Delivery.Challan.Viewer";
import ChallanList from "./Components/Delivery Challan/Delivery.Challan.List";
import DeliveryChallanCreater from "./Components/Delivery Challan/Delivery.Challan.creater";
import NotFound from "./Components/Helper/404page";
import LoadingPage from "./Components/Helper/Loading.Page";
import ProformaList from "./Components/Proforma/Proforma.List";
import ProformaCreater from "./Components/Proforma/Proforma.creater";
import ProformaViewer from "./Components/Proforma/Proforma.Viewer";

function App() {
  const User = useSelector((state) => state.authReducer);
  // console.log("Reducer user");
  const { token, user } = User;
  // console.log(token, user);
  // console.log("User");
  // console.log(User);
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "15vw",
            // border: "1px solid green",
          }}
        >
          <SideBar />
          {/* <MiniDrawer /> */}
        </Paper>
        <Box
          sx={{
            width: "85vw",
            display: "flex",
            // flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
            // border: "1px solid green",
            backgroundColor: "whitesmoke",
            // backgroundColor: "rgb(214,214,214)",
          }}
        >
          <Routes>
            {/* <Route path="/contact" element={<Contact />}></Route> */}

            {/* invoice routes */}
            <Route path="/InvoiceList" element={<InvoiceList />}></Route>
            <Route path="/invoicelist" element={<InvoiceList />}></Route>
            <Route path="/invoice/create" element={<Invoicecreator />}></Route>
            <Route path="/invoice/view" element={<InvoiceViewer />}></Route>
            <Route path="/invoice" element={<InvoiceViewer />}></Route>

            {/* Delivery Challan routes */}
            <Route
              path="/DeliveryChallan/create"
              element={<DeliveryChallanCreater />}
            ></Route>
            <Route
              path="/Proforma/create"
              element={<DeliveryChallanCreater />}
            ></Route>
            <Route
              path="/DeliveryChallan/View"
              element={<DeliveryChallanViewer />}
            ></Route>
            <Route path="/ChallanList" element={<ChallanList />}></Route>

            {/* Proforma Routes */}
            <Route
              path="/DeliveryChallan/create"
              element={<DeliveryChallanCreater />}
            ></Route>
            <Route path="ProformaCreater" element={<ProformaCreater />}></Route>
            <Route path="/Proforma/View" element={<ProformaViewer />}></Route>
            <Route path="/ProformaList" element={<ProformaList />}></Route>

            {/* Auth Routes  */}
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>

            {/* Other Routes  */}
            <Route
              path="/"
              element={token ? <InsideMedicineContainer /> : <Login />}
            ></Route>
            <Route
              path="/medicines"
              element={token ? <InsideMedicineContainer /> : <Login />}
            ></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Account" element={<Account />}></Route>
            <Route path="/Pricing" element={<Pricing />}></Route>
            <Route path="/OurConditions" element={<OurConditions />}></Route>
            <Route path="/NotFound" element={<NotFound />}></Route>
            <Route path="/LoadingPage" element={<LoadingPage />}></Route>
            {/* <Route
              path="/InsideMedicine"
              element={<InsideMedicineContainer />}
            ></Route> */}
          </Routes>
          {/* <Navbar /> */}
          {/* <MobileNavabr /> */}
        </Box>
      </Box>
      <Toaster />
    </div>
  );
}

export default App;
