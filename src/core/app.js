import { multiFn, mergeWithFn } from 'shared/utils/helpers';
import { set as Set } from 'lodash';

let app = {
  globalStatus: {
    status: null,
    setContextState: () => {}
  }
};

if (process.env.NODE_ENV === 'development') {
  document.app = () => app;
}

if (!app) {
  app = JSON.parse(localStorage.getItem('sharedAppState')) || {};
} else {
  app = {};
}

const setToLocalStorage = (path, value, shareBeetweenSessions) => {
  if (shareBeetweenSessions) {
    const appStateFromSession = JSON.parse(localStorage.getItem('sharedAppState')) || {};

    Set(appStateFromSession, path, value);

    localStorage.setItem('sharedAppState', JSON.stringify(appStateFromSession));
  }
};

const setMerge = (path, value, shareBeetweenSessions) => {
  const o = {};
  Set(o, path, value);
  mergeWithFn(app, o);
  setToLocalStorage(path, value, shareBeetweenSessions);
};

const set = (path, value, shareBeetweenSessions) => {
  Set(app, path, value);
  setToLocalStorage(path, value, shareBeetweenSessions);
};

const get = path => path.split('.').reduce((o, i) => {
  if (o) {
    return o[i];
  }
  return undefined;
}, app);

const run = (path, ...args) => multiFn(get(path), ...args);

const del = (path) => {
  delete get(path);
};

export default {
  set,
  setMerge,
  get,
  run,
  del,
  object: app
};
