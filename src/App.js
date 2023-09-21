import { lazy, Suspense, useState } from "react";
import "./App.css";
import { Box, DialogContent, Paper, Stepper } from "@mui/material";
// import Contact from "./Components/Contact/Contact";
// import { useNavigate } from "react-router-dom";
// import MobileNavabr from "./Components/Navigation Bar/Mobile.Navbar";
// import Navbar from "./Components/Navbar/Navbar";
// import TemporaryDrawer from "./Components/MuuiComponents/Drawer";
// import MiniDrawer from "./Components/MuuiComponents/Drawer";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import LandingPage from "./Components/Landing Page/Landing.Page";
import HorizontalStepper from "./Components/Stepper/Stepper";
import Contact from "./Components/Contact/Contact";
import PricingPayment from "./Components/Pricing/Pricing.Payment";
import PrivateRoute from "./PrivateRoute";
// require("dotenv").config();
import Invoice_Payment from "./Components/Invoice/payment/invoice.payment";

const Home = lazy(() => import("./Components/Home/Home"));
const InvoiceViewer = lazy(() => import("./Components/Invoice/invoice.viewer"));
const SideBar = lazy(() => import("./Components/Sidebar/sidebar.js"));
const InsideMedicineContainer = lazy(() =>
  import("./Components/Medicine/InsideMedicineContainer")
);
const InvoiceList = lazy(() => import("./Components/Invoice/invoice.list"));
const Invoicecreator = lazy(() =>
  import("./Components/Invoice/invoice.creator")
);
const Login = lazy(() => import("./Components/Auth/Login"));
const SignUp = lazy(() => import("./Components/Auth/SignUp"));
const About = lazy(() => import("./Components/About/About"));
const Account = lazy(() => import("./Components/Account/Account"));
const Pricing = lazy(() => import("./Components/Pricing/Pricing"));
const OurConditions = lazy(() => import("./Components/About/OurConditions"));
const DeliveryChallanViewer = lazy(() =>
  import("./Components/Delivery Challan/Delivery.Challan.Viewer")
);
const ChallanList = lazy(() =>
  import("./Components/Delivery Challan/Delivery.Challan.List")
);
const DeliveryChallanCreater = lazy(() =>
  import("./Components/Delivery Challan/Delivery.Challan.creater")
);
const NotFound = lazy(() => import("./Components/Helper/404page"));
const LoadingPage = lazy(() => import("./Components/Helper/Loading.Page"));
const ProformaList = lazy(() => import("./Components/Proforma/Proforma.List"));
const ProformaCreater = lazy(() =>
  import("./Components/Proforma/Proforma.creater")
);
const ProformaViewer = lazy(() =>
  import("./Components/Proforma/Proforma.Viewer")
);

function App() {
  const [sidebar, setSidebar] = useState(false);
  console.log(process.env.dev);
  // console.log(sidebar);
  // const User = useSelector((state) => state.authReducer);
  // // console.log("Reducer user");
  // const { token, user } = User;
  // const [token] = useState(localStorage.getItem("token"));
  // console.log(token);
  // console.log(token, user);
  // console.log("User");
  // console.log(User);
  const User = useSelector((state) => state.authReducer);
  const { token, user } = User;
  const data = useSelector((state) => state.ProductReducer);
  console.log(data);
  // console.log(token);
  return (
    <div className="App">
      <Box
        sx={{
          // border: "1px solid red",
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {user ? (
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              // width: "15vw",
              width: `${sidebar ? "5vw" : "15vw"}`,
              // border: "1px solid green",
            }}
          >
            <SideBar sidebar={sidebar} setSidebar={setSidebar} />
            {/* <MiniDrawer /> */}
          </Paper>
        ) : (
          <></>
        )}
        <Box
          sx={{
            // width: `${sidebar ? "95vw" : "85vw"}`,
            width: "100vw",
            display: "flex",
            // pl: `${sidebar ? "15vw" : ""}`,
            // flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
            // border: "10px solid green",
            // backgroundColor: "whitesmoke",

            background: "#D7E8EA",

            // backgroundColor: "rgb(214,214,214)",
          }}
        >
          <Suspense fallback={<LoadingPage />}>
            <Routes>
              {/* Other Routes  */}
              {/* <Route
                path="/"
                element={token ? <InsideMedicineContainer /> : <LandingPage />}
              ></Route> */}
              {/* <Route path="/home" element={<Home />}></Route> */}

              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/SignUp" element={<SignUp />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
              <Route path="/Pricing" element={<Pricing />}></Route>
              <Route path="/About" element={<About />}></Route>

              {/* Private Routes */}

              <Route path="/" element={<PrivateRoute />}>
                <Route path="contact" element={<Contact />}></Route>
                {/* invoice routes */}
                {/* <Route path="/InvoiceList" element={<InvoiceList />}></Route> */}
                <Route path="invoice" element={<InvoiceViewer />}></Route>
                <Route path="invoicelist" element={<InvoiceList />}></Route>
                <Route
                  path="invoice/create"
                  element={<Invoicecreator />}
                ></Route>
                <Route path="invoice/view" element={<InvoiceViewer />}></Route>
                <Route
                  path="invoice/payment/:id"
                  element={<Invoice_Payment />}
                ></Route>

                {/* <Route path="About" element={<About />}></Route> */}
                <Route path="Account" element={<Account />}></Route>
                {/* <Route path="Pricing" element={<Pricing />}></Route> */}
                <Route path="OurConditions" element={<OurConditions />}></Route>
                {/* Delivery Challan routes */}
                <Route
                  path="DeliveryChallan/create"
                  element={<DeliveryChallanCreater />}
                ></Route>
                <Route
                  path="Proforma/create"
                  element={<DeliveryChallanCreater />}
                ></Route>
                <Route
                  path="DeliveryChallan/View"
                  element={<DeliveryChallanViewer />}
                ></Route>
                <Route path="ChallanList" element={<ChallanList />}></Route>

                {/* Proforma Routes */}
                <Route
                  path="DeliveryChallan/create"
                  element={<DeliveryChallanCreater />}
                ></Route>
                <Route
                  path="ProformaCreater"
                  element={<ProformaCreater />}
                ></Route>
                <Route
                  path="Proforma/View"
                  element={<ProformaViewer />}
                ></Route>
                <Route path="ProformaList" element={<ProformaList />}></Route>

                {/* Auth Routes  */}

                <Route
                  path="medicines"
                  element={<InsideMedicineContainer />}
                ></Route>
                {/* <Route path="/home" element={<Home />}></Route> */}
                {/* <Route path="/Account" element={<Account />}></Route> */}
                <Route path="OurConditions" element={<OurConditions />}></Route>
                <Route path="*" element={<NotFound />}></Route>
                {/* <Route
                path="/HorizontalStepper"
                element={<HorizontalStepper />}
              ></Route> */}

                {/* <Route
              path="/InsideMedicine"
              element={<InsideMedicineContainer />}
            ></Route> */}
              </Route>
            </Routes>
          </Suspense>
          {/* <Navbar /> */}
          {/* <MobileNavabr /> */}
        </Box>
      </Box>
      <Toaster />
      <DialogContent>
        {/* {data?.data?.map((buyer) => (
          <Box> {buyer}</Box>
        ))} */}
      </DialogContent>
    </div>
  );
}

export default App;
