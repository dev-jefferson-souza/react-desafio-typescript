import { userModel, userModelLogin } from "../../models/userModel";
import { api } from "../api";

const uri = "/user/";

function userGET(id: number) {
  return api.get(uri + id);
}

function userPOST(user: userModel) {
  return api.post(uri, user);
}

function userUPDATE(id: number, userUpdated: userModel) {
  return api.put(uri + id, userUpdated);
}

function userDELETE(id: number) {
  return api.delete(uri + id);
}

function userLOGIN(user: userModelLogin) {
  return api.post(uri + "login", user);
}

const userService = {
  userGET,
  userPOST,
  userUPDATE,
  userDELETE,
  userLOGIN,
};
export default userService;
