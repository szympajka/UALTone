import React from 'react';

export const DropZoneContext = React.createContext();

const withDropZoneContext = Component => props => (
  <DropZoneContext.Consumer>
    {context => <Component {...props} dropzoneContext={context} />}
  </DropZoneContext.Consumer>
);

export {
  withDropZoneContext
};
