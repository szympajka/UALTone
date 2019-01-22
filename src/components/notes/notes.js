// ####### Declarations ##########
import React, { useState } from 'react';
import Tone from 'tone';
import styled from 'styled-components';
import {
  flattenDeep, map, forEach, size, random, findIndex, indexOf, toArray,
} from 'lodash';
import ShareApi from '../../core/api/share';
import octaves from '../../sources/octaves';

// ####### Styled Components #############
const Octaves = styled.div`
  position: relative;
  width: ${(window.innerWidth / 3)}px;
  height: ${(window.innerWidth / 3)}px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 5em;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OctaveKey = styled.div`
  // border-top-left-radius: ${() => random(0, size(octaves))}px;
  // border-top-right-radius: ${() => random(0, size(octaves))}px;
  // border-bottom-left-radius: ${() => random(0, size(octaves))}px;
  // border-bottom-right-radius: ${() => random(0, size(octaves))}px;
  width: ${(window.innerWidth / 3) / (size(octaves) / 7)}px;
  height: ${(window.innerWidth / 3) / (size(octaves) / 7)}px;
  // color: transparent;
  color: #000;
  font-size: 16px;
  display: flex;
  background-color: #000;
  // background-color: ${props => (props.play ? '#ff0007ab' : 'transparent')};
  justify-content: center;
  align-items: center;
  transition: all ease-in 0.2s;

  // :nth-of-type(2n){
  //   background-color: #967171
  // }
`;
const Btn = styled.div`
  background: transparent;
  opacity: 0;
  padding: 12px 18px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  font-weight: 400;
  position: fixed;
  z-index: 100;
  bottom: 20px;
  left: 50%;
  transform: translatex(-50%);
  margin: auto;
  display: inline-block;
  border: solid 1px;
`;

// ####### Helpers ##########
const colorArray = [
  '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF',
];

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index += 1) {
    await callback(array[index], index, array); // eslint-disable-line
  }
};

// ####### Functions ##########
const synth = new Tone.Synth().toMaster();

const playSequence = (state, setState) => {
  Tone.Transport.stop();

  const notes = [];

  const getToneTime = (note = '4n') => {
    let notetime = Tone.now();

    notes.forEach((n) => {
      notetime += n;
    });

    notes.push(note);

    console.log('notetime', notetime);

    return notetime;
  };

  const play = (o, n, d) => {
    Tone.Transport.schedule((time) => {
      synth.triggerAttackRelease(o, n, time);
      Tone.Draw.schedule(() => {
        document.getElementById('text').innerHTML = d;
        document.getElementById('text').style.color = colorArray[indexOf(toArray(octaves), o)];
        document.getElementById(o).style.backgroundColor = colorArray[indexOf(toArray(octaves), o)];
      }, time);

      Tone.Draw.schedule(() => {
        document.getElementById(o).style.backgroundColor = '';
      }, time + Tone.Time(n).toSeconds());
    }, getToneTime(n));
  };

  state.data.forEach((m) => {
    const { octave, note, description } = m;
    play(octave, note, description);
  });

  Tone.Transport.schedule(() => {
    document.getElementById('text').innerHTML = '';
    setState({ ...state, data: [], ongoing: false });
    window.scan();
  }, getToneTime());

  Tone.Transport.start();
};

// ####### Composing view ##########
const Notes = () => {
  console.log('render');
  const [state, setState] = useState({
    ongoing: false,
    data: [],
    albumID: 0,
    play: '',
  });

  const getNotes = () => {
    setState({
      ...state,
      ongoing: true,
    });
  };

  const updateInput = (e) => {
    setState({
      ...state,
      albumID: e.target.value,
    });
  };

  const fetchNotes = async () => {
    if (!window.code) {
      window.code = 422;
    }

    const data = [];
    // const album = await (await ShareApi.getAlbum({ id: window.code })).json();

    // await asyncForEach(album.message.photos, async (photo) => {
    // const notes = await (await fetch(`http://127.0.0.1:9999?photoID=${photo.id}&imageURI=${encodeURIComponent(photo.file.path)}`)).json();
    const notes = await (await fetch(`${process.env.REACT_APP_API_URL}?photoID=${1}&imageURI=${1}`)).json();
    data.push(notes);
    // });

    setState({ ...state, data: flattenDeep(data), ongoing: false });
  };

  if (state.ongoing) {
    fetchNotes();
  }

  if (state.data.length) {
    console.log(state.data);
    playSequence(state, setState);
  }

  // playSequence(state, setState);

  // const charts = {
  //   1: 'F3',
  //   2: 'G3',
  //   3: 'A3',
  //   4: 'B3',
  //   5: 'C4',
  //   6: 'D4',
  //   7: 'E4',
  //   8: 'F4',
  //   9: 'G4',
  //   0: 'A4',
  // };

  // console.log('render');

  // let key = 'C4';

  // Tone.Transport.schedule((time) => {
  //   synth.triggerAttack(key, time);
  //   // Tone.Draw.schedule(() => {
  //   //   document.getElementById(key).style.backgroundColor = '#3c3c3c';
  //   // }, time);
  // });

  // window.addEventListener('keydown', (e) => {
  //   key = charts[e.key];
  //   Tone.Transport.start('+0.05');
  // });

  // window.addEventListener('keyup', (e) => {
  //   key = charts[e.key];
  //   synth.triggerRelease();
  //   Tone.Draw.schedule(() => {
  //     document.getElementById(key).style.backgroundColor = 'transparent';
  //     Tone.Transport.stop();
  //   }, '+0.05');
  // });

  return (
    <React.Fragment>
      <div>
        { /* <input type="text" onChange={updateInput} /> */}
        <Btn
          type="button"
          onClick={getNotes}
        >
          {state.ongoing ? 'Fetching...' : 'Release'}
        </Btn>
      </div>
      <Title id="text" />

      <Octaves>
        {map(octaves, (octave, i) => (
          <OctaveKey
            type="tone"
            id={octave}
            key={octave}
            octave={octave}
            color={colorArray[i]}
            play={octave === state.play}
          >
            {octave}
          </OctaveKey>
        ))}
      </Octaves>

    </React.Fragment>
  );

  // return (
  // <div style={{
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: '100%',
  //   height: '100%',
  //   position: 'absolute',
  // }}
  // >
  //   <input type="text" onChange={updateInput} />
  //   <button
  //     type="button"
  //     style={{
  //       background: '#2127f3',
  //       display: 'inline-block',
  //       padding: '12px 18px',
  //       borderRadius: '5px',
  //       color: '#fff',
  //       fontWeight: 'bold',
  //     }}
  //     onClick={getNotes}
  //   >
  //     {state.ongoing ? 'Fetching...' : 'Get Notes'}
  //   </button>
  // </div>
  // );
};

export default Notes;
