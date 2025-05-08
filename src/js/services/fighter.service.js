import { callApi } from "../helpers/api.helper.js";

class FighterService {
    #endpoint =
      "repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json";
  
    async getFighters() {
      try {
        const apiResult = await callApi(this.#endpoint, "GET");
        return apiResult; // <-- already decoded to callApi
      } catch (error) {
        throw error;
      }
    }
  }
  
  const fighterService = new FighterService(); 

  export default fighterService