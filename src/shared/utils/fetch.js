import { has } from 'lodash';
import { get } from './shared/utils/storage';

import App from '../../core/app';
import config from '../../config/config';
import AuthApi from '../../core/api/auth';

const oldFetch = window.fetch;

window.fetch = (url, options) => {
  const fetchRetry = (callurl, fetchOptions = {}) => {
    const delay = 1000;
    let limit = 3;

    return new Promise((resolve, reject) => {
      function fetchUrl() {
        function success(response) {
          resolve(response);
        }

        function failure(error) {
          limit--;
          if (limit) {
            setTimeout(fetchUrl, delay);
          } else {
            if (AuthApi.checkSession()) {
              AuthApi.dropSession();
              window.location.href = '/signin';
            }

            if (App.get('globalStatus')) {
              App.get('globalStatus').setContextState({
                status: {
                  type: 'error',
                  message: 'Crap, looks like server took a break. We wish he should be back soon...'
                }
              });
            }

            reject(error);
          }
        }

        return oldFetch(callurl, fetchOptions).then(success).catch(failure);
      }

      fetchUrl();
    });
  };

  const call = () => {
    const promise = fetchRetry(url, options);

    return promise.then(res => res.json()).then((res) => {
      let status = null;

      if (!res.success) {
        switch (res.message) {
          case 'UNAUTHORISED':
            if (AuthApi.checkSession()) {
              AuthApi.dropSession();
              window.location.href = '/signin';

              status = {
                type: 'info',
                message: 'To see content on this page you have to sing in!'
              };
            }

            break;
          case 'URI_EXISTS':
            status = {
              type: 'error',
              message: 'This URI already exist! Try another one.'
            };

            break;
          case 'EMAIL_EXISTS':
            status = {
              type: 'error',
              message: 'This email is already in use! If you already have an account, try to sing in. Otherwise, use other email.'
            };
            break;
          case 'DOMAIN_EXISTS':
            status = {
              type: 'error',
              message: "This domain exists and you don't have permision to visit it."
            };

            break;
          case 'UNKNOWN_ERROR':
          case 'INTERNAL_ERROR':
          case 'NOT_FOUND':
            status = {
              type: 'error',
              message: 'Crap, looks like server took a break. We wish he should be back soon...'
            };

            break;
          case 'DATA_ERROR':
            status = {
              type: 'error',
              message: 'Recived incorrect data. Try another one.'
            };
            break;

          default:
            status = {
              type: 'error',
              message: res.message
            };
            break;
        }
      }

      if (App.get('globalStatus')) {
        App.get('globalStatus').setContextState({ status });
      }

      return res;
    });
  };

  if (options && has(options, 'headers')) {
    if (has(options.headers, config.AUTH.TOKEN)) {
      if (get(config.AUTH.TOKEN)) {
        return call();
      }

      window.location.href = '/signin';
    }
    return call();
  }

  return call();
};
