const LOCAL_STORAGE = 'localStorage';

const get = key => window[LOCAL_STORAGE].getItem(key);

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
