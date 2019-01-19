const serverURL = 'https://devapi.imglish.com';
const token = window.location.hash.replace('#', '');

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
