// ####### Declarations ##########
const fetch = require('node-fetch');
const lodash = require('lodash');
const fs = require('fs');
const { words } = require('../words');
const wordsStats = require('../words_stats.js');

// ####### Defaults ##########
const consts = {
  API_KEY: 'AIzaSyANb8LgLJKnW0dPIGvyf8frvXZlEfkoOMw',
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
    types: ['LABEL_DETECTION'],
  },
};

const defaultParams = {
  imageURI: '',
  photoID: 0,
};

// ####### Resolver ##########
// const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
// const syllabify = word => word.match(syllableRegex);

// console.log(['away', 'hair', 'halter', 'hairspray', 'father', 'lady', 'kid'].map(syllabify));

const resolve = (payload, type) => {
  if (type === consts.reponces.labelAnnotations) {
    return lodash.flattenDeep(
      lodash.map(payload, (entry, index) => {
        const descriptors = entry.description.split(' ');

        return lodash.map(descriptors, (descriptor) => {
          const wordIndex = lodash.indexOf(words, descriptor.toLowerCase());
          const indexSum = wordIndex.toString().split('').map(Number).reduce((a, b) => (a + b), 0);


          return {
            index,
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
  const { imageURI, photoID } = params;

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

  console.log('responses', responses);

  // fs.writeFile(`../resolved/${photoID}.js`, `module.export = ${JSON.stringify(responses)}`, (err) => {
  //   if (err) return console.log(err);
  //   console.log('Success');
  // });

  lodash.forEach(responses, (responce) => {
    lodash.forEach(responce, (payload, type) => {
      result.push(resolve(payload, type));
    });
  });

  return result;
};

// ####### Export ##########
module.exports = getImageDescriptors;
