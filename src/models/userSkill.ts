import { SkillModel } from "./skillModel";
import { userModel } from "./userModel";

interface user {
  id: number;
}

interface skill {
  id: number;
}

export interface userSkillModel {
  id: number;
  user: userModel;
  skill: SkillModel;
  knowledgeLevel: number;
  createdAt: string;
  updatedAt: string;
}

export interface userSkillUpdateModel {
  knowledgeLevel: number;
}
