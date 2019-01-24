import 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Notes from './components/notes/notes';
import config from './config/config';
import scan from './components/qr/qr';
import UserEnd from './components/userend/userend';
import Dropzone from './shared/ui/dropzone/dropzone'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #000;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  #qr {
    position: absolute;
    top: ${config.debug ? '0' : '-100%'};
    left: ${config.debug ? '0' : '-100%'};
    width: ${config.debug ? 'auto' : 0};
    height: ${config.debug ? 'auto' : 0};
  }

  #qrcode {
    left: -1000px;
    position: fixed;
  }
`;

const App = props => (
  <React.Fragment>
    <GlobalStyle />
    {props.children}
  </React.Fragment>
);

if (window.location.hash === '#donteventry') {
  console.log('Server Mode');
  scan();

  ReactDOM.render((
    <App>
      <Notes />
    </App>
  ), document.getElementById('root'));
} else {
  console.log('Client Mode');
  ReactDOM.render((
    <App>
      <Dropzone dropzoneEnabled={true}>
        <UserEnd />
      </Dropzone>
    </App>
  ), document.getElementById('root'));
}
