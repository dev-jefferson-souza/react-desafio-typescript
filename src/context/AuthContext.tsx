import axios from "axios";
import { Notify } from "notiflix";
import { createContext, useEffect, useState } from "react";
import userService from "../api/services/userService";
import { AuthContextType, AuthProviderProps } from "../models/authContext";
import { signInProps } from "../models/signIn";
import { userModel } from "../models/userModel";

const LOCAL_STORAGE_TOKEN_KEY = "@neki-desafio-token";
const LOCAL_STORAGE_USER_KEY = "@neki-desafio-user";

export const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
  signIn: async () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    () => localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || null
  );

  const [user, setUser] = useState<userModel | null>(() =>
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY) || "null")
  );

  useEffect(() => {
    token !== null
      ? (axios.defaults.headers.common.Authorization = token)
      : delete axios.defaults.headers.common.Authorization;
  }, [token]);

  async function signIn(request: signInProps) {
    try {
      const response = await userService.userLOGIN(request.user);
      if (response.status === 200) {
        Notify.success(`Bem vindo, ${request.user.login}!`);
        if (request.savePassword === true) {
          localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, response.data.token);
          localStorage.setItem(
            LOCAL_STORAGE_USER_KEY,
            JSON.stringify(request.user)
          );
        }
        setToken(response.data.token);
        setUser(response.data.usuario);
      }
    } catch (err) {
      Notify.failure("Usuário ou senha incorreta!");
    }
  }

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
