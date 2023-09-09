// import { useAuth } from "../../../context/auth";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoadingPage from "./Components/Helper/Loading.Page";
export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const User = useSelector((state) => state.authReducer);

  // const token = localStorage.getItem("token");
  const { token, user } = User;
  console.log(token);
  useEffect(() => {
    if (token) {
      setOk(true);
    } else {
      setOk(false);
    }
  }, [token]);
  return ok ? <Outlet /> : <LoadingPage />;
}
