const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const getImageDescriptors = require('./components/imageToNotes');

const app = express();
const port = process.env.PORT || 9999;

const errors = {
  URL_NOT_DEFINED: {
    error: 'URL_NOT_DEFINED',
    message: 'url is not defined',
  },
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`API started on port ${port}`);
});

app.route('/').get(async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send(errors.URL_NOT_DEFINED);
  }

  const imageBuffer = await fetch(url).then(r => r.buffer());
  const base64Image = imageBuffer.toString('base64');
  const responce = await getImageDescriptors({ base64Image });

  return res.send(responce);
});

module.exports = app;
