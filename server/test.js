// Imports the Google Cloud client library.
const {Storage} = require('@google-cloud/storage');

// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
const storage = new Storage({
  projectId: 'brilliant-balm-228218',
  keyFilename: '/Users/szympajka/GoogleCloud/MyFirstProject-ec9e5111e304.json'
});

// Makes an authenticated API request.

module.exports = { storage }
