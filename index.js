const BASE_API_URL = 'https://api.github.com/';

// const API_URL =
//   "https://api.github.com/repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json";

  const SECURITY_HEADERS = {
  headers: {
    authorization: `token ${GITHUB_TOKEN}`,
  },
};

const rootElement = document.getElementById('root');
const loadingElement = document.getElementById('loading-overlay');

function callApi(endpoint, method = 'GET') {
  const url = BASE_API_URL + endpoint;
  const options = { method, ...SECURITY_HEADERS };

//   return fetch(url, options)
//     .then(response => response.ok ? response.json() : Promise.reject(Error('Failed to load')))
//     .then(file => JSON.parse(atob(file.content)))
//     .catch(error => {
//       console.warn(error);
//       rootElement.innerText = 'Failed to load data';
//     })
//     .finally(() => {
//       loadingElement.remove();
//     });
    return fetch(url, options)
    .then(response =>
      response.ok
        ? response.json()
        : Promise.reject(Error('Failed to load'))
    )
    .then(file => JSON.parse(atob(file.content)))
    .catch(error => { throw error });
}

class FighterService {
    #endpoint = 'repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json'
   
    async getFighters() {
      try {
        const apiResult = await callApi(this.#endpoint, 'GET');
        return JSON.parse(atob(apiResult.content));
      } catch (error) {
        throw error;
      }
    }
   }

   const fighterService = new FighterService();
