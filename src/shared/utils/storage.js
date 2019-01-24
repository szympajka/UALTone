const LOCAL_STORAGE = 'localStorage';

const get = () => 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDgyNzM0MDcsImV4cCI6MTU0ODg3ODIwNywic3ViIjoiMTIifQ.T2lU8EXi5sZC4Xpt5X_XgOxzzCLt7rRvxDp2JLjKnLc'//key => window[LOCAL_STORAGE].getItem(key);

const put = (key, value) => {
  window[LOCAL_STORAGE].setItem(key, value);
};

const drop = (key) => {
  window[LOCAL_STORAGE].removeItem(key);
};

const clear = () => {
  window[LOCAL_STORAGE].clear();
};

export { put, get, drop, clear };
