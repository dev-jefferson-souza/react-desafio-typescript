import { ReactNode } from "react";
import { signInProps } from "./signIn";
import { userModel } from "./userModel";

export type AuthContextType = {
  token: string | null;
  setToken: (token: string | null) => void;
  user: userModel | null;
  setUser: (user: userModel | null) => void;
  signIn: (user: signInProps) => Promise<void>;
};

export type AuthProviderProps = {
  children: ReactNode;
};
