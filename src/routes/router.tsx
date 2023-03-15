import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { PrivateRoute } from "./private.route";
import { PublicRoute } from "./public.route";

export const Router = () => {
  const { user } = useContext(AuthContext);
  return user == null ? <PrivateRoute /> : <PublicRoute />;
};
