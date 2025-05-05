// api/predict.js
// const apiUrl = import.meta.env.VITE_API_URL; 
// console.log("apiUrl_222", apiUrl);
export default async function handler(req, res) {
    try {
      // Only stringify body for POST/PUT/PATCH and only if there is a body
      let body;
      if (req.method !== 'GET' && req.body) {
        body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
      }
  
      const response = await fetch('http://3.89.212.31:80/predict', {
        method: req.method,
        headers: {
          ...req.headers,
          host: undefined, // Remove host header
          'content-length': undefined, // Let fetch set this
        },
        body,
      });
  
      const data = await response.text();
      res.status(response.status).send(data);
    } catch (error) {
      res.status(500).json({ error: 'Proxy error', details: error.message });
    }
  }