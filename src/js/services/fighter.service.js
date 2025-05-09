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

    async getFighterInfo(fighterId) {
      const endpoint = `repos/oleksandr-danylchenko/street-fighter/contents/resources/api/details/fighter/${fighterId}.json`;
      console.log("Current endpoint:", endpoint);

      try {
        const result = await callApi(endpoint, "GET");
        return result; //JSON object with detailed information about the fighter
      } catch (error) {
        throw error;
      }
    }
  }
  
  const fighterService = new FighterService(); 

  export default fighterService