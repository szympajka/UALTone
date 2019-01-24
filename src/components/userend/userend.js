import React from 'react';
import Dropzone from '../../shared/ui/dropzone/dropzone';

const UserEnd = () => (
  <Dropzone>
    <button tabIndex="0" type="button" onClick={() => this.dropZoneContext.dropzoneRef.open()}>
      Add Photos
    </button>
  </Dropzone>
);

export default UserEnd;
