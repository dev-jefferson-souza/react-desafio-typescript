import { ReactNode } from "react";
import { signInProps } from "./signIn";
import { userModel } from "./userModel";
import { userSkillFromUser } from "./userSkill";

export type AuthContextType = {
  token: string | null;
  setToken: (token: string | null) => void;
  user: userModel | null;
  setUser: (user: userModel | null) => void;
  signIn: (user: signInProps) => Promise<void>;
  getUsersSkillsUpdated: () => void;
  usersSkills: userSkillFromUser[] | null;
  setUserSkills: (userSkill: userSkillFromUser[] | null) => void;
};

export type AuthProviderProps = {
  children: ReactNode;
};
