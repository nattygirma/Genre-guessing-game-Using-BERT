// api/predict.js
const apiUrl = import.meta.env.VITE_API_URL; 
console.log("apiUrl_222", apiUrl);
export default async function handler(req, res) {
    const response = await fetch(apiUrl + '/predict', {
      method: req.method,
      headers: {
        ...req.headers,
        host: undefined, // Remove host header to avoid issues
      },
      body: req.method === 'POST' ? req.body : undefined,
    });
  
    const data = await response.text();
    res.status(response.status).send(data);
  }