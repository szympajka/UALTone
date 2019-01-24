// ####### Declarations ##########
import axios from 'axios';
import { forEach } from 'lodash';
import { setHeaders } from '../../shared/utils/url';
import { omitEmptyPreserveNatural } from '../../shared/utils/helpers';

// ####### Default Params ##########
const uploadPhotoDefaultParams = {
  album_id: '',
  name: '',
  description: '',
  photo: '',
  color: '',
  uri: null,
};

// ####### Api Endpoints ##########
const uploadPhoto = (pms = uploadPhotoDefaultParams, options = {}) => {
  const { CancelToken } = axios;
  const source = CancelToken.source();

  const formData = new FormData();

  forEach(omitEmptyPreserveNatural({ ...uploadPhotoDefaultParams, ...pms }), (v, k) => formData.append(k, v));

  const request = axios({
    url: 'https://devapi.imglish.com/photo/add',
    method: 'POST',
    headers: setHeaders({ axios: true, auth: true, multidata: true }),
    data: formData,
    cancelToken: source.token,
    onUploadProgress: (progressEvent) => {
      if (options.onUploadProgress) {
        const { loaded: l, total: t } = progressEvent;
        const loaded = Number(l);
        const total = Number(t);

        if (loaded && total) {
          options.onUploadProgress(parseInt(loaded / total * 100, 10));
        }
      }
    },
  }).then(res => res.data);

  return {
    request,
    source,
  };
}

const getPhoto = (pms = {
  id: '',
}) => fetch(`https://devapi.imglish.com/photo/${pms.id}`, {
  method: 'GET',
  headers: setHeaders(),
}).then(res => res.json());

console.log('setHeaders', setHeaders())

const createAlbum = (pms = {
  name: '',
  description: '',
  uri: '',
}) => fetch('https://devapi.imglish.com/album/create', {
  method: 'POST',
  headers: setHeaders(),
  body: JSON.stringify(pms),
}).then(res => res.json());

const getAlbum = (pms = {
  id: '',
}) => fetch(`https://devapi.imglish.com/album/${pms.id}`, {
  method: 'GET',
  headers: setHeaders(),
}).then(res => res.json());

// ####### Export ##########
export default {
  uploadPhoto,
  getPhoto,
  createAlbum,
  getAlbum
};
