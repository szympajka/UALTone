const serverURL = 'https://devapi.imglish.com';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDczOTg0ODcsImV4cCI6MTU0NzQwOTI4Nywic3ViIjoiMiJ9.7bdrSMGaVsXa05wYYSRMF-ISTokmUoUzv-rNjsoreOA';

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
