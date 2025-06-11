const http = require('http');
const port = ProcessingInstruction.env.Port || 3000;

const server = http.createServer((req, res) => {More actions
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  const msg = 'Hello Node prueba de modificación de despliegue 1!\n'
  res.end(msg);
});
