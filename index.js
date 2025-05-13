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

const axios = require('axios');
const fs = require('fs');

const imageUrl = 'https://webappstacc.blob.core.windows.net/webappblob/Ucatolica.png';

async function downloadImage() {
  try {
    const response = await axios.get(imageUrl, { responseType: 'stream' });

    // Guarda la imagen localmente
    response.data.pipe(fs.createWriteStream('logo-descargado.png'));

    console.log('Imagen descargada con éxito.');
  } catch (error) {
    console.error('Error al descargar la imagen:', error.message);
  }
}

downloadImage();