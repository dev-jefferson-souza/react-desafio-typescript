import {
  userSkillPostModel,
  userSkillUpdateModel,
} from "../../models/userSkill";
import { api } from "../api";

const uri = "/userSkill/";

function userSkillGETALL() {
  return api.get(uri);
}

function userSkillGET(id: number) {
  return api.get(uri + id);
}

function userSkillPOST(userSkill: userSkillPostModel) {
  return api.post(uri, userSkill);
}

function userSkillUPDATE(id: number, userSkill: userSkillUpdateModel) {
  return api.patch(uri + id, userSkill);
}

function userSkillDELETE(id: number) {
  return api.delete(uri + id);
}

const userSkillservice = {
  userSkillGETALL,
  userSkillGET,
  userSkillPOST,
  userSkillUPDATE,
  userSkillDELETE,
};
export default userSkillservice;
