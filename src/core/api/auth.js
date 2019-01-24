import Config from '../../config/config';
import { setHeaders } from '../../shared/utils/url';
import { put, get, drop } from '../../shared/utils/storage';
import App from '../app';

const setSession = (res) => {
  if (res.success) {
    put(Config.AUTH.TOKEN, res.message);
  }
};

const dropSessionPlain = () => {
  drop(Config.AUTH.TOKEN);
  App.set('user', null);
};

const logout = () => fetch(Config.serverURL + '/user/logout', {
  method: 'GET',
  headers: setHeaders()
}).then((res) => {
  dropSessionPlain();
  return res;
});

const dropSession = () => {
  dropSessionPlain();
  logout();
};

const check = () => fetch(Config.serverURL + '/user/check', {
  method: 'GET',
  headers: setHeaders()
});

const login = (pms = {
  email: '',
  password: ''
}) => fetch(Config.serverURL + '/user/login', {
  method: 'POST',
  headers: setHeaders({
    auth: false
  }),
  body: JSON.stringify(pms)
}).then((res) => {
  setSession(res);

  if (res.success) {
    console.info('Session Established');
  }

  return res;
});

const checkSession = () => {
  let token = get(Config.AUTH.TOKEN);

  if (token && token.toUpperCase() === 'UNDEFINED') {
    token = null;
  }

  return !!token;
};

const forceCheckSession = () => check();

export default {
  setSession,
  dropSession,
  check,
  logout,
  login,
  checkSession,
  forceCheckSession
};
