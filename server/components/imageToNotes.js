// ####### Declarations ##########
const fetch = require('node-fetch');
const lodash = require('lodash');
const fs = require('fs');
const { words } = require('../words');

let num = 0;
let max = 0;

const popularity = {};

for (let i = 0; i < words.length; i += 1) {
  const digitSum = i.toString().split('').map(Number).reduce((a, b) => (a + b), 0);

  if (!popularity[digitSum]) {
    popularity[digitSum] = 0;
  }

  popularity[digitSum] += 1;

  if (digitSum > max) {
    num = i;
    max = digitSum;
  }
}

const greatest = Number(Object.keys(popularity).reduce((a, b) => (popularity[a] > popularity[b] ? a : b)));

fs.writeFile('words_stats.json', JSON.stringify({
  max, num, popularity, greatest,
}), (err) => {
  if (err) return console.log(err);
  console.log('Success');
});

// ####### Defaults ##########
const consts = {
  API_KEY: 'AIzaSyANb8LgLJKnW0dPIGvyf8frvXZlEfkoOMw',
  notes: ['1n', '2n', '4n', '8n', '16n'],
  noteSound: ['C', 'D', 'E', 'F', 'G', 'H', 'A'],
  noteScales: [2, 3, 4, 5, 6],
  reponces: {
    faceAnnotations: 'faceAnnotations',
    landmarkAnnotations: 'landmarkAnnotations',
    logoAnnotations: 'logoAnnotations',
    labelAnnotations: 'labelAnnotations',
    localizedObjectAnnotations: 'localizedObjectAnnotations',
    imagePropertiesAnnotation: 'imagePropertiesAnnotation',
    webDetection: 'webDetection',
    error: 'error',
  },
  requests: {
    // types: ['FACE_DETECTION', 'LANDMARK_DETECTION', 'LOGO_DETECTION', 'LABEL_DETECTION', 'OBJECT_LOCALIZATION', 'IMAGE_PROPERTIES', 'WEB_DETECTION'],
    types: ['LABEL_DETECTION'],
  },
};

const defaultParams = {
  base64Image: '',
};

// ####### Resolver ##########
const resolve = (payload, type) => {
  if (type === consts.reponces.labelAnnotations) {
    return lodash.map(payload, (entry) => {
      const wordIndex = lodash.indexOf(words, entry.description);
      const indexSum = wordIndex.toString().split('').map(Number).reduce((a, b) => (a + b), 0);

      return [entry.description, wordIndex, indexSum];
    });
  }

  return [];
};

// ####### Modules ##########
const getImageDescriptors = async (params = defaultParams) => {
  const result = [];
  const { base64Image } = params;

  const data = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${consts.API_KEY}`, {
    method: 'POST',
    body: JSON.stringify({
      requests: [
        {
          image: {
            content: base64Image,
          },
          features: consts.requests.types.map(type => ({ type, maxResults: 50 })),
        },
      ],
    }),
  });

  const { responses } = await data.json();

  lodash.forEach(responses, (responce) => {
    lodash.forEach(responce, (payload, type) => {
      result.push(resolve(payload, type));
    });
  });

  return result;
};

// ####### Export ##########
module.exports = getImageDescriptors;
