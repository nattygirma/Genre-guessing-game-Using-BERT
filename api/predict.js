// api/predict.js
// const apiUrl = import.meta.env.VITE_API_URL; 
// console.log("apiUrl_222", apiUrl);
export default async function handler(req, res) {
    try {
      const fetchOptions = {
        method: req.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: req.method === 'POST' ? JSON.stringify(req.body) : undefined,
      };
  
      const response = await fetch('http://3.89.212.31:80/predict', fetchOptions);
      const data = await response.text();
  
      res.status(response.status).send(data);
    } catch (error) {
      res.status(500).json({ error: 'Proxy error', details: error.message });
    }
  }