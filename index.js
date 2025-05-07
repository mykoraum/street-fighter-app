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

async function startApp() {
    // const endpoint = 'repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json';
    // const fighters = await callApi(endpoint);
    // rootElement.innerText = getFightersNames(fighters);
    try {
        loadingElement.style.visibility = 'visible';
    
        const endpoint = 'repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json';
        const fighters = await callApi(endpoint);
    
        rootElement.innerText = getFightersNames(fighters);
      } catch (error) {
        console.warn(error);
        rootElement.innerText = 'Failed to load data';
      } finally {
        loadingElement.style.visibility = 'hidden';
      }
}

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

function createElement({ tagName, className = '', attributes = {} }) {
    const element = document.createElement(tagName);
    element.classList.add(className);
  
    Object
      .keys(attributes) // 🔹 Get array all of keys (property names) from obj attributes. 
      // If attributes = { id: 'btn', type: 'submit' }, -> Object.keys(attributes) returns ['id', 'type'].
      .forEach(key => element.setAttribute(key, attributes[key])); // key = 'id'; attributes[key] = 'btn'; ->> element.setAttribute('id', 'btn')
  
    return element;
  }

  function createName(name) {
    const nameElement = createElement({ tagName: 'span', className: 'name' });
    nameElement.innerText = name;
  
    return nameElement;
  }
  
  function createImage(source) {
    const attributes = { src: source };
    const imgElement = createElement({ tagName: 'img', className: 'fighter-image', attributes
    });

    return imgElement;
  }

  function createFighter(fighter) {
    const { name, source } = fighter;
    const nameElement = createName(name);
    const imageElement = createImage(source);
    const element = createElement({ tagName: 'div', className: 'fighter' });
  
    element.append(imageElement, nameElement);
  
    return element;
  }

  function createFighters(fighters) {
    const fighterElements = fighters.map(fighter => createFighter(fighter));
    const element = createElement({ tagName: 'div', className: 'fighters' });
  
    element.append(...fighterElements);
  
    return element;
  }
  

function getFightersNames(fighters) {
  return fighters.map(it => it.name).join('\n');
}

startApp();