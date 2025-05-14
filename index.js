
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