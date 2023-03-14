import { Notify } from "notiflix";
import { createContext, ReactNode, useState } from "react";
import userService from "../api/services/userService";
import { signInProps } from "../models/signIn";
import { userModel } from "../models/userModel";

type AuthContextType = {
  token: string | null;
  setToken: (token: string | null) => void;
  user: userModel | null;
  setUser: (user: userModel | null) => void;
  signIn: (user: signInProps) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
  signIn: async () => {},
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [user, setUser] = useState<userModel | null>(null);

  const handleTokenChange = (newToken: string | null) => {
    setToken(newToken);
    localStorage.setItem("token", newToken || "");

    // // Decodifica o token e obtém as informações do usuário
    // const decodedToken: any = jwt_decode(newToken || "");
    // console.log(decodedToken);
    // setUser(decodedToken.user);
  };

  async function signIn(request: signInProps) {
    setToken(null);

    try {
      const response = await userService.userLOGIN(request.user);
      if (response.status === 200) {
        Notify.success(`Bem vindo, ${request.user.login}!`);
        {
          request.savePassword === true
            ? handleTokenChange(response.data.token)
            : setToken(null);
        }

        setUser(response.data.usuario);
      }
    } catch (err) {
      Notify.failure("Usuário ou senha incorreta!");
    } finally {
      console.log(token);
    }
  }

  return (
    <AuthContext.Provider
      value={{ token, setToken: handleTokenChange, user, setUser, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
