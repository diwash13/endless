export function getData() {
  const API_URL =
    "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge";
  return fetch(API_URL).then(res => res.json());
}
