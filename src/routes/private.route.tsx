import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};
