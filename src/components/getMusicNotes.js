import React, { useState } from 'react';
import Tone from 'tone';
import { flattenDeep } from 'lodash';
import ShareApi from '../core/api/share';

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index += 1) {
    await callback(array[index], index, array); // eslint-disable-line
  }
};

const playSequence = (state, setState) => {
  const notes = [];
  const synth = new Tone.Synth().toMaster();

  const getToneTime = (note = '4n') => {
    let notetime = Tone.now();

    notes.forEach((n) => {
      notetime += n; // Tone.Time(n).toSeconds();
    });

    notes.push(note);

    console.log('notetime', notetime);

    return notetime;
  };

  const play = (o, n) => {
    synth.triggerAttackRelease(o, n, getToneTime(n));
  };

  state.data.forEach((m) => {
    const { octave, note } = m;
    play(octave, note);
  });
};

export default () => {
  const [state, setState] = useState({
    ongoing: false,
    data: null,
    albumID: 0,
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
    const data = [];
    const album = await (await ShareApi.getAlbum({ id: state.albumID })).json();

    await asyncForEach(album.message.photos, async (photo) => {
      const notes = await (await fetch(`http://127.0.0.1:9999?imageURI=${encodeURIComponent(photo.file.path)}`)).json();
      data.push(notes);
    });

    setState({ ...state, data: flattenDeep(data), ongoing: false });
  };

  if (state.ongoing) {
    fetchNotes();
  }

  if (state.data) {
    console.log(state.data);

    playSequence(state, setState);
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      position: 'absolute',
    }}
    >
      <input type="text" onChange={updateInput} />
      <button
        type="button"
        style={{
          background: '#2127f3',
          display: 'inline-block',
          padding: '12px 18px',
          borderRadius: '5px',
          color: '#fff',
          fontWeight: 'bold',
        }}
        onClick={getNotes}
      >
        {state.ongoing ? 'Fetching...' : 'Get Notes'}
      </button>
    </div>
  );
};
