// api/predict.js
const apiUrl = import.meta.env.VITE_API_URL; 
console.log("apiUrl_predict", apiUrl);
export default async function handler(req, res) {
    // Prepare fetch options
    const fetchOptions = {
      method: req.method,
      headers: { ...req.headers, host: undefined },
    };
  
    // Handle body for POST/PUT/PATCH
    if (req.method !== 'GET' && req.body) {
      fetchOptions.body = JSON.stringify(req.body);
      fetchOptions.headers['content-type'] = 'application/json';
    }
  
    try {
      const response = await fetch(apiUrl + '/predict', fetchOptions);
      const data = await response.text(); // Use .text() to handle both JSON and non-JSON
      res.status(response.status).send(data);
    } catch (error) {
      res.status(500).json({ error: 'Proxy error', details: error.message });
    }
  }