const API_URL = 'https://api.github.com/repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json';
const SECURITY_HEADERS = {
  headers: {
    authorization: `token ${GITHUB_TOKEN}` 
  }
};

// fetch(API_URL, SECURITY_HEADERS);
const responsePromise = fetch(API_URL, SECURITY_HEADERS);
responsePromise
    .then(res => res.json())
    .then(file => {
        const fighters = JSON.parse(atob(file.content));
        console.log(fighters);
      });

