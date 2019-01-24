import React, { Component } from 'react';

import Dropzone from './dropzone/index';

import {  isFunction } from 'lodash';
import { DropZoneContext } from '../../../core/context';
import { CreatePureComponent } from '../../../self/component';

import styled from 'styled-components';
import UploadService from '../../../services/UploadService/UploadService';

const OngoingUpload = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 16px;
  background-color: #fff;
  border: solid 1px #ccc;
`;

const OngoingUploadFilesBox = styled.div`
  height: 100%;
  max-height: 100px;
  overflow: auto;
  background-color: #fff;
`;

class El extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };

    // this.fuse = new UploadService(props);
    this.fuse = new UploadService();

    this.props.file.onUploadProgress = progress => this.setState({ progress });
    this.props.file.onUploadSuccess = () => this.props.updateList();
  }

  render() {
    const { fid, name } = this.props.file.state.file;
    const { progress } = this.state;

    return (
      <div
        role="button"
        tabIndex="0"
        onClick={() => {
          this.fuse.cancelFile(fid).then(() => this.props.updateList());
        }}
        key={fid}
      >{progress + ' - ' + name}
      </div>
    );
  }
}

class UploadView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: false,
      minimalised: false
    };

    // this.fuse = new UploadService(props);
    this.fuse = new UploadService();

    this.clearView = this.clearView.bind(this);
    this.updateList = this.updateList.bind(this);
    this.maximalise = this.maximalise.bind(this);
    this.minimalise = this.minimalise.bind(this);
    this.changeUpdateState = this.changeUpdateState.bind(this);
  }

  updateList() {
    this.forceUpdate();
  }

  changeUpdateState() {
    this.setState((prevState) => {
      const isPaused = !prevState.paused;

      if (isPaused) {
        this.fuse.pauseUpload();
      } else {
        this.fuse.resumeUpload();
      }

      return {
        paused: isPaused
      };
    });
  }

  maximalise() {
    this.setState({
      minimalised: false
    });
  }

  minimalise() {
    this.setState({
      minimalised: true
    });
  }

  clearView() {
    if (this.state.paused) {
      this.fuse.clearAll();
      this.updateList();
    } else {
      this.fuse.clearUpload();
      this.updateList();
    }
  }

  render() {
    const { minimalised, paused } = this.state;
    const { files } = this.fuse.getGlobalState();
    const [uploadedFiles] = this.fuse.countUploadedFiles();

    if (!files.length) return null;

    return (
      <React.Fragment>
        <OngoingUpload show={minimalised}>
          <button type="button" onClick={this.maximalise}>Maximalise</button>
        </OngoingUpload>
        <OngoingUpload show={!minimalised}>
          { files.length ? `You have uploaded ${uploadedFiles} files from ${files.length} ` : null }
          <button type="button" onClick={this.changeUpdateState}>{paused ? 'Resume' : 'Pause'}</button>
          <button type="button" onClick={this.clearView}>Clear</button>
          <button type="button" onClick={this.minimalise}>Minimalise</button>
          <OngoingUploadFilesBox>
            {
              files.map(file => <El key={file.state.file.fid} file={file} updateList={this.updateList} />)
            }
          </OngoingUploadFilesBox>
        </OngoingUpload>
      </React.Fragment>
    );
  }
}

class DropZone extends CreatePureComponent {
  constructor(props) {
    super(props);

    // this.fuse = new UploadService(props);
    this.fuse = new UploadService();

    this.state = {
      files: [],
      store: [],
      dropzoneActive: false,
      setContextState: (newState) => {
        this.setState(newState);
      }
    };

    this.CONSTS = {
      ACTION: {
        SHOW_DROPZONE: 'SHOW_DROPZONE',
        HIDE_DROPZONE: 'HIDE_DROPZONE'
      }
    };

    this.dropzoneRef = React.createRef();

    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.renderDropZone = this.renderDropZone.bind(this);
    this.renderEmpty = this.renderEmpty.bind(this);
  }

  reducer(state, action) {
    const always = {
      ...state,
      ...action.payload
    };

    switch (action.type) {
      case this.CONSTS.ACTION.SHOW_DROPZONE:
        return {
          ...always,
          dropzoneActive: true
        };
      case this.CONSTS.ACTION.HIDE_DROPZONE:
        return {
          ...always,
          dropzoneActive: false
        };
      default:
        return state;
    }
  }

  onDragEnter() {
    this.dispatch({
      type: this.CONSTS.ACTION.SHOW_DROPZONE
    });
  }

  onDragLeave() {
    this.dispatch({
      type: this.CONSTS.ACTION.HIDE_DROPZONE
    });
  }

  onDrop(files) {
    this.fuse.push(files);

    this.dispatch({
      type: this.CONSTS.ACTION.HIDE_DROPZONE
    });
  }

  renderDropZone() {
    const { dropzoneActive } = this.state;

    const overlayStyle = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      background: 'rgba(45, 167, 94, 0.85)',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    };

    return (
      <React.Fragment>
        <Dropzone
          disablePreview
          disableClick
          ref={this.dropzoneRef}
          style={{ position: 'relative', width: '100%', height: '100%' }}
          onDrop={this.onDrop}
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
        >
          {dropzoneActive && (
            <div style={overlayStyle}>
              <h3>Drop files Here</h3>
            </div>
          )}
          {isFunction(this.props.children) ? this.props.children(this) : this.props.children}
        </Dropzone>
        { //<UploadView />
        }
      </React.Fragment>
    );
  }

  renderEmpty() {
    return <div>{isFunction(this.props.children) ? this.props.children(this) : this.props.children}</div>;
  }

  componentWillUnmount() {
    this.setState({
      setContextState: () => { }
    });
  }

  componentDidUpdate(nextProps, nextState) {
    // this.fuse.updateProps(nextProps);

    if (nextState.files.length !== this.state.files.length) {
      console.log(nextState.files);
    }
  }

  render() {
    const { dropzoneEnabled } = this.props;

    const contextValue = {
      ...this.state,
      dropzoneRef: this.dropzoneRef,
      updateFilesState: () => {}
    };

    return (
      <DropZoneContext.Provider value={contextValue}>
        {dropzoneEnabled ? this.renderDropZone() : this.renderEmpty()}
      </DropZoneContext.Provider>
    );
  }
}

export default DropZone;
