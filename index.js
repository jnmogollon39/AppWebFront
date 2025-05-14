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
    <html>
      <body>
        <h1>Mi imagen desde Blob Storage</h1>
        <img src="https://webappstacc.blob.core.windows.net/webappblob/Ucatolica.png" />
      </body>
    </html>
  `);
});