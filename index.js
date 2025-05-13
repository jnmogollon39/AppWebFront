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

const express = require('express');
const app = express();

const BLOB_BASE_URL = 'https://webappstacc.blob.core.windows.net/webappblob>';

app.get('/imagen/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  const url = `${BLOB_BASE_URL}/${nombre}`;

  // Redirige directamente al recurso de Blob
  res.redirect(url);
});
