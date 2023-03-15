import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
