import React, { useState } from 'react';
import Tone from 'tone';

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

  state.data[0].forEach((m) => {
    const { octave, note } = m;
    play(octave, note);
  });
};

export default () => {
  const [state, setState] = useState({
    ongoing: false,
    data: null,
  });

  const getNotes = () => {
    setState({
      ongoing: true,
    });
  };

  const fetchNotes = async () => {
    const url = encodeURIComponent('https://devapi.imglish.com/upload/1547062979292qdebc95vi50404250_1562482677229191_77142465949204480_n.jpg');
    const responce = await fetch(`http://127.0.0.1:9999?url=${url}`);
    const data = await responce.json();

    setState({ data, ongoing: false });
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
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      position: 'absolute',
    }}
    >
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
