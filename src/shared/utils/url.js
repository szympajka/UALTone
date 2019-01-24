import { defaultsDeep, map, forEach, includes } from 'lodash';
import { get } from './storage';

import Config from '../../config/config';

const getParam = (n = undefined, q = undefined) => {
  const params = {};

  let name = n;
  let query = q;
  let { search } = window.location;

  if (query) {
    search = query;
  }

  if (includes(name, '=')) {
    query = name;
    name = undefined;
  }

  if (includes(search, '?')) {
    search = search.split('?')[1];
  }

  forEach(search.split('&'), (p) => {
    let pair = p;

    if (pair) {
      pair = pair.split('=');
      params[pair[0]] = decodeURIComponent(pair[1] || '');
    }
  });

  if (!name) {
    return params;
  }

  return params[name];
};

const makeParams = (params = {}, mergeExisting = false) => {
  if (mergeExisting) {
    defaultsDeep(params, getParam());
  }

  return map(Object.keys(params), k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
};

const setHeaders = (pms = {
  auth: true,
  headers: {},
  axios: false,
  multidata: false
}) => {
  const requestHeaders = pms.headers || {};

  if (pms.multidata) {
    requestHeaders['Content-Type'] = 'multipart/form-data';
  } else {
    requestHeaders['Content-Type'] = 'application/json';
  }

  if (pms.auth) {
    requestHeaders[Config.AUTH.TOKEN] = `Bearer ${get(Config.AUTH.TOKEN)}`;
  }

  if (pms.axios) {
    return requestHeaders;
  }

  return new Headers(requestHeaders);
};

export {
  getParam,
  makeParams,
  setHeaders
};
