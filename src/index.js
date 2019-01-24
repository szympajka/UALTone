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
    color: #fff;
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

  .sk-fading-circle {
    margin: 100px auto;
    width: 40px;
    height: 40px;
    position: absolute;
  }
  
  .sk-fading-circle .sk-circle {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  
  .sk-fading-circle .sk-circle:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #fff;
    border-radius: 100%;
    -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
            animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
  }
  .sk-fading-circle .sk-circle2 {
    -webkit-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
            transform: rotate(30deg);
  }
  .sk-fading-circle .sk-circle3 {
    -webkit-transform: rotate(60deg);
        -ms-transform: rotate(60deg);
            transform: rotate(60deg);
  }
  .sk-fading-circle .sk-circle4 {
    -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
            transform: rotate(90deg);
  }
  .sk-fading-circle .sk-circle5 {
    -webkit-transform: rotate(120deg);
        -ms-transform: rotate(120deg);
            transform: rotate(120deg);
  }
  .sk-fading-circle .sk-circle6 {
    -webkit-transform: rotate(150deg);
        -ms-transform: rotate(150deg);
            transform: rotate(150deg);
  }
  .sk-fading-circle .sk-circle7 {
    -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
            transform: rotate(180deg);
  }
  .sk-fading-circle .sk-circle8 {
    -webkit-transform: rotate(210deg);
        -ms-transform: rotate(210deg);
            transform: rotate(210deg);
  }
  .sk-fading-circle .sk-circle9 {
    -webkit-transform: rotate(240deg);
        -ms-transform: rotate(240deg);
            transform: rotate(240deg);
  }
  .sk-fading-circle .sk-circle10 {
    -webkit-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
            transform: rotate(270deg);
  }
  .sk-fading-circle .sk-circle11 {
    -webkit-transform: rotate(300deg);
        -ms-transform: rotate(300deg);
            transform: rotate(300deg); 
  }
  .sk-fading-circle .sk-circle12 {
    -webkit-transform: rotate(330deg);
        -ms-transform: rotate(330deg);
            transform: rotate(330deg); 
  }
  .sk-fading-circle .sk-circle2:before {
    -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s; 
  }
  .sk-fading-circle .sk-circle3:before {
    -webkit-animation-delay: -1s;
            animation-delay: -1s; 
  }
  .sk-fading-circle .sk-circle4:before {
    -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s; 
  }
  .sk-fading-circle .sk-circle5:before {
    -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s; 
  }
  .sk-fading-circle .sk-circle6:before {
    -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s; 
  }
  .sk-fading-circle .sk-circle7:before {
    -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s; 
  }
  .sk-fading-circle .sk-circle8:before {
    -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s; 
  }
  .sk-fading-circle .sk-circle9:before {
    -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s;
  }
  .sk-fading-circle .sk-circle10:before {
    -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s;
  }
  .sk-fading-circle .sk-circle11:before {
    -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s;
  }
  .sk-fading-circle .sk-circle12:before {
    -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s;
  }
  
  @-webkit-keyframes sk-circleFadeDelay {
    0%, 39%, 100% { opacity: 0; }
    40% { opacity: 1; }
  }
  
  @keyframes sk-circleFadeDelay {
    0%, 39%, 100% { opacity: 0; }
    40% { opacity: 1; } 
  }

  @keyframes color {
    0% { color: #FF6633; }
    2% { color: #FFB399; }
    4% { color: #FF33FF; }
    6% { color: #FFFF99; }
    8% { color: #00B3E6; }
    10% { color: #E6B333; }
    12% { color: #3366E6; }
    14% { color: #999966; }
    16% { color: #99FF99; }
    18% { color: #B34D4D; }
    20% { color: #80B300; }
    22% { color: #809900; }
    24% { color: #E6B3B3; }
    26% { color: #6680B3; }
    28% { color: #66991A; }
    30% { color: #FF99E6; }
    32% { color: #CCFF1A; }
    34% { color: #FF1A66; }
    36% { color: #E6331A; }
    38% { color: #33FFCC; }
    40% { color: #66994D; }
    42% { color: #B366CC; }
    44% { color: #4D8000; }
    46% { color: #B33300; }
    48% { color: #CC80CC; }
    50% { color: #66664D; }
    52% { color: #991AFF; }
    54% { color: #E666FF; }
    56% { color: #4DB3FF; }
    58% { color: #1AB399; }
    60% { color: #E666B3; }
    62% { color: #33991A; }
    64% { color: #CC9999; }
    66% { color: #B3B31A; }
    68% { color: #00E680; }
    70% { color: #4D8066; }
    72% { color: #809980; }
    74% { color: #E6FF80; }
    76% { color: #1AFF33; }
    78% { color: #999933; }
    80% { color: #FF3380; }
    82% { color: #CCCC00; }
    84% { color: #66E64D; }
    86% { color: #4D80CC; }
    88% { color: #9900B3; }
    90% { color: #E64D66; }
    92% { color: #4DB380; }
    94% { color: #FF4D4D; }
    96% { color: #99E6E6; }
    98% { color: #6666FF; }
    100% { color: #FF6633; }
  }
  
  @keyframes cooolor {
    0% { border-color: #FF6633; }
    2% { border-color: #FFB399; }
    4% { border-color: #FF33FF; }
    6% { border-color: #FFFF99; }
    8% { border-color: #00B3E6; }
    10% { border-color: #E6B333; }
    12% { border-color: #3366E6; }
    14% { border-color: #999966; }
    16% { border-color: #99FF99; }
    18% { border-color: #B34D4D; }
    20% { border-color: #80B300; }
    22% { border-color: #809900; }
    24% { border-color: #E6B3B3; }
    26% { border-color: #6680B3; }
    28% { border-color: #66991A; }
    30% { border-color: #FF99E6; }
    32% { border-color: #CCFF1A; }
    34% { border-color: #FF1A66; }
    36% { border-color: #E6331A; }
    38% { border-color: #33FFCC; }
    40% { border-color: #66994D; }
    42% { border-color: #B366CC; }
    44% { border-color: #4D8000; }
    46% { border-color: #B33300; }
    48% { border-color: #CC80CC; }
    50% { border-color: #66664D; }
    52% { border-color: #991AFF; }
    54% { border-color: #E666FF; }
    56% { border-color: #4DB3FF; }
    58% { border-color: #1AB399; }
    60% { border-color: #E666B3; }
    62% { border-color: #33991A; }
    64% { border-color: #CC9999; }
    66% { border-color: #B3B31A; }
    68% { border-color: #00E680; }
    70% { border-color: #4D8066; }
    72% { border-color: #809980; }
    74% { border-color: #E6FF80; }
    76% { border-color: #1AFF33; }
    78% { border-color: #999933; }
    80% { border-color: #FF3380; }
    82% { border-color: #CCCC00; }
    84% { border-color: #66E64D; }
    86% { border-color: #4D80CC; }
    88% { border-color: #9900B3; }
    90% { border-color: #E64D66; }
    92% { border-color: #4DB380; }
    94% { border-color: #FF4D4D; }
    96% { border-color: #99E6E6; }
    98% { border-color: #6666FF; }
    100% { border-color: #FF6633; }
  }

  @keyframes changeLetter {
    0% {
      content: "Heating up AI...";
    }
    3% {
      content: "Fetching images...";
    }
    8% {
      content: "AI's reading your images...";
    }
    14% {
      content: "Sending Unicorn with your music...";
    }
    30% {
      content: "Lookig for this naughty Unicorn...";
    }
    60% {
      content: "Defenitelly something wrong...";
    }
    65% {
      content: "Ask for help plz...";
    }
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
