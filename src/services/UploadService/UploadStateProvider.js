import React, { Component } from 'react';
import UploadService from './UploadService';

const UploadStateContext = React.createContext({});

class UploadStateProvider extends Component {
  constructor() {
    super();

    this.fuse = new UploadService();

    this.fuse.registerSubscriberPopulator((t) => {
      this.props.updater();
      this.setState({ t });
    });

    this.state = {
      t: 't'
    };
  }

  render() {
    console.log('UploadStateContext');
    return (
      <UploadStateContext.Provider value={{ state: this.state, fuse: this.fuse }}>
        {this.props.children}
      </UploadStateContext.Provider>
    );
  }
}

export default UploadStateProvider;

export { UploadStateContext };
