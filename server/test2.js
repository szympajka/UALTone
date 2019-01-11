const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient({
  projectId: 'brilliant-balm-228218',
  keyFilename: '/Users/szympajka/GoogleCloud/MyFirstProject-ec9e5111e304.json'
});

// Performs label detection on the image file
module.exports = {client}
  