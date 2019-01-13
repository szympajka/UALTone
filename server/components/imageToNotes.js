// ####### Declarations ##########
const fetch = require('node-fetch');
const lodash = require('lodash');
const { words } = require('../words');
const wordsStats = require('../words_stats.js');

// ####### Defaults ##########
const consts = {
  API_KEY: 'AIzaSyANb8LgLJKnW0dPIGvyf8frvXZlEfkoOMw',
  // notes: ['1n', '2n', '4n', '8n', '16n'],
  // octaves: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
  // octavesScales: [1, 2, 3, 4, 5, 6, 7],
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
  imageURI: '',
};

// ####### Resolver ##########
const resolve = (payload, type) => {
  if (type === consts.reponces.labelAnnotations) {
    return lodash.flattenDeep(
      lodash.map(payload, (entry) => {
        const descriptors = entry.description.split(' ');

        return lodash.map(descriptors, (descriptor) => {
          const wordIndex = lodash.indexOf(words, descriptor);
          const indexSum = wordIndex.toString().split('').map(Number).reduce((a, b) => (a + b), 0);

          return {
            description: descriptor,
            note: Number((descriptor.length / 20).toFixed(2)),
            octave: wordsStats.octaves[indexSum],
          };
        });
      }),
    );
  }

  return [];
};

// ####### Modules ##########
const getImageDescriptors = async (params = defaultParams) => {
  const result = [];
  const { imageURI } = params;

  const data = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${consts.API_KEY}`, {
    method: 'POST',
    body: JSON.stringify({
      requests: [
        {
          image: {
            source: {
              imageUri: imageURI,
            },
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
