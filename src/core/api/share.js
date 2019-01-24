const serverURL = 'https://devapi.imglish.com';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDgyNzM0MDcsImV4cCI6MTU0ODg3ODIwNywic3ViIjoiMTIifQ.T2lU8EXi5sZC4Xpt5X_XgOxzzCLt7rRvxDp2JLjKnLc';

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
