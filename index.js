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
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>Mi app</title>
    </head>
    <body>
      <h1>Bienvenido</h1>
      <img src="https://webappstacc.blob.core.windows.net/webappblob/Ucatolica.png" alt="Ucatolica" />
    </body>
    </html>
  `);
});