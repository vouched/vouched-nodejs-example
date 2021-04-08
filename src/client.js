const fetch = require('node-fetch');
const fs = require('fs');
const config = require('./config');

// path to base64 string
export const imageToBase64 = (path) => {
  // read file from path
  const bitmap = fs.readFileSync(path);
  // convert buffer to base 64 string
  return new Buffer(bitmap).toString('base64');
}
export const fetchApi = (
  path,
  { body = null, method = null, apiKey = config.API_KEY } = {}
) => {
  const url = `${config.API_URL}${path}`;
  if (!method) {
    method = body ? 'POST' : 'GET';
  }
  return fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': apiKey
    }
  }).then(res => res.json());
};