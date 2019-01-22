const serverURL = 'https://devapi.imglish.com';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDc4OTcyOTcsImV4cCI6MTU0ODUwMjA5Nywic3ViIjoiMiJ9.oyW5wRKaMVTFZ504UqE-NOOlTHWVSMFhleAvBbVHQ0s';

const defaultParams = {
  id: 0,
};

const getAlbum = (pms = defaultParams) => fetch(`${serverURL}/album/${pms.id}`, {
  method: 'GET',
  headers: new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }),
});

export default {
  getAlbum,
};
