// ####### Declarations ##########
import React from 'react';
import Tone from 'tone';
import styled from 'styled-components';
import { flattenDeep, forEach, map, slice, size, random, indexOf, toArray, groupBy, maxBy } from 'lodash';
import ShareApi from '../../core/api/share';
import octaves from '../../sources/octaves';

// ####### Styled Components #############
const Octaves = styled.div`
  position: relative;
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
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
`
const Title2 = styled.h1`
  font-size: 3em;
  color: inherit;
`
const Title3 = styled.h1`
  font-size: 3em;

  &:after{
    animation: changeLetter 120s linear infinite alternate;
    content: 'Wait'
  }
`
const ColorBox = styled.div`
  transform: scale(1.5);
  margin: 0;
  z-index: 1000;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: color 1024s infinite ease-in-out both;
  animation-direction: reverse;
`
const OctaveKey = styled.div`
  // border-top-left-radius: ${() => random(0, size(octaves))}px;
  // border-top-right-radius: ${() => random(0, size(octaves))}px;
  // border-bottom-left-radius: ${() => random(0, size(octaves))}px;
  // border-bottom-right-radius: ${() => random(0, size(octaves))}px;
  width: ${(window.innerWidth) / (size(octaves) / 7)}px;
  height: ${(window.innerHeight) / (size(octaves) / 7)}px;
  color: transparent;
  //color: #000;
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
const I = styled.span`
  border: solid 2px;
  animation: cooolor 768s infinite ease-in-out both;
  padding: 9px 16px;
  border-radius: 30px;
  display: inline-block;
  margin: 0 10px;
`
const II = styled.span`
animation: color 768s infinite ease-in-out both;
`

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

// ####### Composing view ##########

class Notes extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      wait: false,
    }

    this.fetchNotes = this.fetchNotes.bind(this)
    this.playSequence = this.playSequence.bind(this)
  }

  playSequence() {
    Tone.Transport.stop();

    const notes = [];

    const getToneTime = (note = '4n', push = true) => {
      let notetime = 0;

      notes.forEach((n) => {
        notetime += n;
      });

      if (push) {
        notes.push(note);
      }

      console.log('notetime', notetime);

      return notetime;
    };

    // const play = (o, n, d, g) => {
    const play = (group) => {
      console.log(group)

      if (group.length === 1) {
        const { octave: o, note: n, description: d } = group[0];
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
      } else {
        forEach(group, (m) => {
          let desc = []
          const { octave: o, note: n, description: d } = m;

          forEach(group, (tt) => desc.push(tt.description))

          Tone.Transport.schedule((time) => {
            synth.triggerAttackRelease(o, n, time);
            Tone.Draw.schedule(() => {
              document.getElementById('text').innerHTML = desc.join(' ');
              document.getElementById('text').style.color = colorArray[indexOf(toArray(octaves), o)];
              document.getElementById(o).style.backgroundColor = colorArray[indexOf(toArray(octaves), o)];
            }, time);

            Tone.Draw.schedule(() => {
              document.getElementById(o).style.backgroundColor = '';
            }, time + Tone.Time(n).toSeconds());
          }, getToneTime(n, false));
        })

        // forEach(group, (m) => {
          notes.push(maxBy(group, "note").note);
        // })
      }

    };

    console.log(groupBy(this.state.data, 'index'))

    forEach(this.state.data, (group) => {
      play(group)
      // forEach(group, (m) => {
      //   const { octave, note, description } = m;
      //   play(octave, note, description, group.length);
      // })
    })

    Tone.Transport.schedule(() => {
      window.location.reload();
    }, getToneTime() + Tone.Time('1n').toSeconds());

    Tone.Transport.start();
  }

  async fetchNotes() {
    if (!window.code) {
      this.setState({
        wait: false,
        data: null
      })

      return false;
    }

    this.setState({
      wait: true
    })

    const data = [];
    const album = await ShareApi.getAlbum({ id: window.code })

    await asyncForEach(album.message.photos, async (photo) => {
      const notesData = await fetch(`${process.env.REACT_APP_API_URL}?photoID=${photo.id}&imageURI=${encodeURIComponent(photo.file.path)}`)
      const notes = await notesData.json();
      data.push(notes);
    });

    const nextData = groupBy(map(flattenDeep(data), (note) => {
      if (!note.octave) {
        note.octave = "C4"
      }

      return note
    }), 'index')

    const finalData = []

    forEach(nextData, (piece) => {
      const divideMore = []

      forEach(piece, (rr, ii) => {
        if (rr.description[0] === rr.description[0].toUpperCase()) {
          divideMore.push(ii)
        }
      })

      console.log('piece', piece)
      console.log('divideMore', divideMore)

      forEach(divideMore, (num, ind) => {
        if (divideMore[ind + 1]){
          finalData.push(slice(piece, num, divideMore[ind + 1]))
          console.log('slice(piece, num, divideMore[ind + 1])', slice(piece, num, divideMore[ind + 1]))
        } else {
          finalData.push(slice(piece, num, piece.length))
          console.log('slice(piece, num, piece.length)', slice(piece, num, piece.length))
        }
      })

      console.log('=----------------------=')
    })

    this.setState({
      wait: false,
      data: finalData
    })
  };

  getWelcome() {
    if (this.state.wait) {
      return <ColorBox><Title3 /></ColorBox>
    }

    return (
      <ColorBox>
        <Title2>SCAN YOUR TICKET TO PLAY</Title2>
        <p style={{ fontSize: '1.5em' }}>
          To get ticket, go to
          <I><II>bit.ly/digdom</II></I>
          on your mobile device
        </p>
      </ColorBox>
    )
  }

  componentDidUpdate() {
    if (this.state.data) {
      this.playSequence();
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.data ? null : this.getWelcome()}
        <Btn type="button" onClick={this.fetchNotes} />
        <Title id="text" />
        <Octaves>
          {map(octaves, (octave, i) => (
            <OctaveKey type="tone" id={octave} key={octave} octave={octave} color={colorArray[i]}>{octave}</OctaveKey>
          ))}
        </Octaves>
      </React.Fragment>
    );
  }
}

export default Notes;
