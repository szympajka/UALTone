const serverURL = 'https://devapi.imglish.com';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDczNzY2MzIsImV4cCI6MTU0NzM4NzQzMiwic3ViIjoiMiJ9.1trYRK9xJLR81q_xLRaxS02L18zsJJZiZ0LEwyHATR0';

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
