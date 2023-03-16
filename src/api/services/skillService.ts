import { api } from "../api";

const uri = "/skill/";

function skillGETALL() {
  return api.get(uri);
}

function skillGET(id: number) {
  return api.get(uri + id);
}

const skillService = {
  skillGETALL,
  skillGET,
};
export default skillService;
