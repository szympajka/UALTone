/**
 * FUSe.js - JavaScript Files Upload Service
 *
 * Copyright by (c) Szymon Pajka 2018
 * v. 0.1.0
 *
 * This is the Imglish files upload service, responsible for:
 *
 * - keeping state of all ongoing uploads
 * - uploading files to correct destination
 * - working out of the box (not being interupted by route change)
 */

// ####### Declarations ##########
import Api from '../../core/api/share';
import axios from 'axios';
import { groupBy, forEach, remove, take, find, isFunction, has } from 'lodash';

// ####### Defaults ##########
const CONSTS = {
  NEW_ALBUM: 'NEW_ALBUM',
  FILES_PER_UPLOAD: 3,
  STATUS: {
    ERROR: 'ERROR',
    PAUSED: 'PAUSED',
    PENDING: 'PENDING',
    ONGOING: 'ONGOING',
    ABORTED: 'ABORTED',
    UPLOADED: 'UPLOADED'
  }
};

const globalState = {
  files: [],
  newAlbumID: null
};

const populators = {};

window.aaa = {
  getState: () => globalState,
  getGrouped: () => groupBy(globalState.files, 'state.status')
};

// ####### Helpers ##########
const sanitizeRoutePath = (routePath) => {
  const albumRegex = /(\/album\/)(\d*)/;
  const route = routePath;

  if (route === '/404') {
    return null;
  }

  if (albumRegex.test(route)) {
    return albumRegex.exec(route)[2];
  }

  return CONSTS.NEW_ALBUM;
};

class FileUploader {
  constructor(props) {
    const { file, route, ...restParams } = props;

    this.state = {
      file,
      route,
      buffer: false,
      remoteFile: null,
      uploadedAt: null,
      responceMessage: null,
      status: CONSTS.STATUS.PENDING
    };

    this.props = restParams;

    this.uploadFile = this.uploadFile.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.registerUpload = this.registerUpload.bind(this);
    this.unregisterUpload = this.unregisterUpload.bind(this);
    this.removeFileFromBuffer = this.removeFileFromBuffer.bind(this);
  }

  changeStatus(nextStatus, msg) {
    this.state.status = CONSTS.STATUS[nextStatus] || this.state.status;

    if (msg) {
      this.state.responceMessage = msg;
    }
  }

  registerUpload() {
    this.changeStatus(CONSTS.STATUS.ONGOING);
  }

  unregisterUpload(status) {
    this.changeStatus(status);
    this.props.uploadFiles();
  }

  removeFileFromBuffer() {
    remove(globalState.files, f => f.state.file.fid === this.state.file.fid);
    this.props.uploadFiles();
  }

  async uploadFile() {
    const { file, route } = this.state;
    // const { color, reader } = this.state.fileData;

    let albumID = route;

    if (route === CONSTS.NEW_ALBUM) {
      if (!globalState.newAlbumID) {
        const res = await Api.createAlbum({ name: 'New Album', description: '' });
        globalState.newAlbumID = res.message.id;

        this.props.populateChanges('qqqqq');
      }

      albumID = globalState.newAlbumID;
    }

    const { request, source } = Api.uploadPhoto({
      album_id: albumID,
      name: file.name,
      // photo: reader.result,
      photo: file,
      // color: rgbToHex(color.r, color.g, color.b)
      color: ''
    }, {
      onUploadProgress: (progress) => {
        if (this.onUploadProgress && isFunction(this.onUploadProgress)) {
          this.onUploadProgress(progress);
        }
      }
    });

    this.cancelUpload = () => {
      const canCancel = this.state.uploadedAt ? new Date() - this.state.uploadedAt < 140 : true;

      if (canCancel) {
        if (this.state.status === CONSTS.STATUS.ONGOING) {
          source.cancel();
          this.removeFileFromBuffer();
          return Promise.resolve();
        }

        if (this.state.remoteFile) {
          return Api.deletePhoto({
            id: this.state.remoteFile.id
          }).then(() => {
            this.removeFileFromBuffer();
          });
        }
      } else {
        this.removeFileFromBuffer();
      }

      return Promise.resolve();
    };

    this.pauseUpload = () => {
      const prevStatus = this.state.status;

      this.changeStatus(CONSTS.STATUS.PAUSED);

      if (prevStatus === CONSTS.STATUS.ONGOING) {
        source.cancel();
        return Promise.resolve();
      }

      if (this.state.remoteFile) {
        return Api.deletePhoto({
          id: this.state.remoteFile.id
        });
      }

      return Promise.resolve();
    };

    request.then((res) => {
      if (res.success) {
        this.state.uploadedAt = new Date();
        this.state.remoteFile = res.message;
        this.unregisterUpload(CONSTS.STATUS.UPLOADED);

        this.props.populateChanges('aaaa');

        if (this.onUploadSuccess && isFunction(this.onUploadSuccess)) {
          this.onUploadSuccess();
        }
      } else {
        this.unregisterUpload(CONSTS.STATUS.ERROR, res.message);
      }
    }).catch((thrown) => {
      axios.isCancel(thrown);
    });
  }

  upload() {
    this.registerUpload();
    this.uploadFile();
  }
}

// ####### Main Class ##########
class UploadService {
  // constructor(dropzoneProps) {
  constructor(props) {
    this.state = {
      uploadPerSession: CONSTS.FILES_PER_UPLOAD,
      bufferPerSession: CONSTS.BUFFER_PER_UPLOAD
    };

    this.props = props;
    // this.props = dropzoneProps;

    this.push = this.push.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.cancelFile = this.cancelFile.bind(this);
    // this.updateProps = this.updateProps.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.pauseUpload = this.pauseUpload.bind(this);
    this.clearUpload = this.clearUpload.bind(this);
    this.resumeUpload = this.resumeUpload.bind(this);
    this.getGlobalState = this.getGlobalState.bind(this);
    this.populateChanges = this.populateChanges.bind(this);
    this.countUploadedFiles = this.countUploadedFiles.bind(this);
    this.registerSubscriberPopulator = this.registerSubscriberPopulator.bind(this);
    this.unregisterSubscriberPopulator = this.unregisterSubscriberPopulator.bind(this);
  }

  populateChanges(t) {
    forEach(populators, populate => populate(t));
  }

  uploadFiles() {
    const { files } = globalState;
    const { uploadPerSession } = this.state;
    const filesByStatus = groupBy(files, 'state.status');
    const ongoingUpload = filesByStatus[CONSTS.STATUS.ONGOING] || [];

    console.log(filesByStatus);

    if (ongoingUpload.length < uploadPerSession) {
      forEach(take(filesByStatus[CONSTS.STATUS.PENDING], uploadPerSession), file => file.upload());
    }
  }

  push(files) {
    // const { pathname } = this.props.location;
    const { pathname } = window.location;
    const { uploadFiles, populateChanges } = this;
    const route = sanitizeRoutePath(pathname);

    if (!route) return;

    globalState.files.push(...files.map(file => new FileUploader({ file, route, uploadFiles, populateChanges })));
    this.uploadFiles();
  }

  // updateProps(nextProps) {
  //   this.props = nextProps;
  // }

  cancelFile(fid) {
    const file = find(globalState.files, f => f.state.file.fid === fid);

    if (has(file, 'cancelUpload')) {
      return file.cancelUpload();
    }

    remove(globalState.files, f => f.state.file.fid === fid);
    return Promise.resolve();
  }

  getGlobalState() {
    return globalState;
  }

  countUploadedFiles() {
    const { files } = globalState;
    const filesByStatus = groupBy(files, 'state.status');

    return [(filesByStatus[CONSTS.STATUS.UPLOADED] || []).length];
  }

  pauseUpload() {
    const { files } = globalState;
    const filesByStatus = groupBy(files, 'state.status');
    const ongoingUpload = filesByStatus[CONSTS.STATUS.ONGOING] || [];

    forEach(ongoingUpload, (file) => {
      if (has(file, 'pauseUpload')) {
        file.pauseUpload();
      }
    });
  }

  resumeUpload() {
    const { files } = globalState;
    const filesByStatus = groupBy(files, 'state.status');
    const pausedUpload = filesByStatus[CONSTS.STATUS.PAUSED] || [];

    forEach(pausedUpload, (file) => {
      file.upload();
    });
  }

  clearUpload() {
    const { files } = globalState;
    const filesByStatus = groupBy(files, 'state.status');
    const pausedUpload = filesByStatus[CONSTS.STATUS.UPLOADED] || [];

    forEach(pausedUpload, (file) => {
      remove(globalState.files, f => f.state.file.fid === file.state.file.fid);
    });
  }

  clearAll() {
    this.pauseUpload();
    globalState.files = [];
  }

  registerSubscriberPopulator(populator) {
    const key = Math.random().toString(36).substr(2, 9);
    populators[key] = populator;
    return key;
  }

  unregisterSubscriberPopulator(key) {
    delete populators[key];
  }
}

// ####### Export ##########
export default UploadService;
