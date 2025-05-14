const express = require('express');
const app = express();
const http = require('http');
const port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node prueba de modificación de despliegue 1!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>Imagen desde Blob Storage</title></head>
    <body>
      <h1>Mi imagen</h1>
      <img src="https://webappstacc.blob.core.windows.net/webappblob/Ucatolica.png" alt="Ucatolica" width="400" />
    </body>
    </html>
  `);
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});