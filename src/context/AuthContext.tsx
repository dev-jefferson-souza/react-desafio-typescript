import { Notify } from "notiflix";
import { createContext, useEffect, useState } from "react";
import { api } from "../api/api";
import userService from "../api/services/userService";
import userSkillservice from "../api/services/userSkillService";
import { AuthContextType, AuthProviderProps } from "../models/authContext";
import { signInProps } from "../models/signIn";
import { userModel } from "../models/userModel";
import { userSkillModel } from "../models/userSkill";

const LOCAL_STORAGE_TOKEN_KEY = "@neki-desafio-token";
const LOCAL_STORAGE_USER_KEY = "@neki-desafio-user";

export const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
  signIn: async () => {},
  getUsersSkillsUpdated: async () => {},
  usersSkills: null,
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<userModel | null>(null);
  const [usersSkills, setUserSkills] = useState<userSkillModel[]>([]);

  useEffect(() => {
    async function loadStorageData() {
      const storedToken = await localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
      const storedUser = await localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    }

    loadStorageData();
  }, []);

  useEffect(() => {
    token !== null
      ? (api.defaults.headers.common["Authorization"] = token)
      : delete api.defaults.headers.common.Authorization;
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
            JSON.stringify(response.data.usuario)
          );
        }
        api.defaults.headers.common["Authorization"] = response.data.token;
        setToken(response.data.token);
        setUser(response.data.usuario);
      }
    } catch (err) {
      Notify.failure("Usuário ou senha incorreta!");
    }
  }

  async function getUsersSkillsUpdated() {
    const response = await userSkillservice.userSkillGETALL();
    try {
      const unfilteredUsersSkills: userSkillModel[] = response.data;
      const filteredUsersSkill = unfilteredUsersSkills.filter(
        (uSkill) => uSkill.user?.id === user?.id
      );
      setUserSkills(filteredUsersSkill);
    } catch (e) {
      console.log(e);
      Notify.failure("Houve um problema ao carregar as userSkills");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        signIn,
        getUsersSkillsUpdated,
        usersSkills,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
