import React, { useState } from 'react';
import Tone from 'tone';

window.Tone = Tone;

const playSong = () => {
  const notes = ['4n'];

  const synth = new Tone.PluckSynth().toMaster();

  const getToneTime = (note = '4n') => {
    let notetime = 0;

    notes.forEach((note) => {
      notetime += Tone.Time(note).toSeconds();
    });

    notes.push(note);

    console.log('notetime', notetime);

    return notetime;
  };

  const play = (r, n) => {
    synth.triggerAttackRelease(r, n, getToneTime(n));
  };

  play('G4', '4n');
  play('E4', '4n');
  play('E4', '4n');

  play('F4', '4n');
  play('D4', '4n');
  play('D4', '4n');

  play('C4', '8n');
  play('E4', '8n');
  play('G4', '2n');

  play('G4', '4n');
  play('E4', '4n');
  play('E4', '4n');

  play('F4', '4n');
  play('D4', '4n');
  play('D4', '4n');

  play('C4', '8n');
  play('E4', '8n');
  play('C4', '2n');
};


const playSong2 = () => {


  // let notes = ['4n'];

  // const synth = new Tone.Instrument().toMaster();

  // const getToneTime = (note = '4n') => {
  // 	let notetime = Tone.now();

  // 	console.log('notes', notes)

  // 	notes.forEach((note) => {
  // 		notetime += Tone.Time(note).toSeconds()
  // 	})

  // 	notes.push(note);

  // 	console.log('notetime', notetime)

  // 	return notetime;
  // }

  // const play = (r, n) => {
  // 	synth.triggerAttackRelease(r, n, getToneTime(n))
  // }

  // const notesToPlay = [
  // 	// ['fgaffgafab', '4n'],
  // 	// ['c', '2n'],
  // 	// ['ab', '4n'],
  // 	// ['c', '2n'],
  // 	// ['cdcb', '8n'],
  // 	// ['af', '4n'],
  // 	// ['cdcb', '8n'],
  // 	// ['af', '4n'],
  // 	// ['gc', '4n'],
  // 	// ['f', '2n'],
  // 	// ['gc', '4n'],
  // 	// ['f', '2n'],

  // 	['C4', '4n'],
  // 	['C#4', '4n'],
  // 	['F4', '4n'],

  // 	['G4', '8n'],
  // 	['F4', '8n'],
  // 	['E4', '4n'],
  // 	['E4', '4n'],

  // 	['C4', '4n'],
  // 	['G4', '4n'],
  // 	['G4', '4n'],

  // 	['A4', '8n'],
  // 	['G4', '8n'],
  // 	['F4', '2n'],

  // 	// ['C4', '4n'],
  // 	// ['F4', '4n'],
  // 	// ['F4', '4n'],

  // 	// ['G4', '8n'],
  // 	// ['F4', '8n'],
  // 	// ['E4', '4n'],
  // 	// ['E4', '4n'],

  // 	// ['C4', '4n'],
  // 	// ['G4', '4n'],
  // 	// ['G4', '4n'],

  // 	// ['A4', '8n'],
  // 	// ['G4', '8n'],
  // 	// ['F4', '2n'],

  // 	// ['C4', '4n'],
  // 	// ['A4', '4n'],
  // 	// ['A4', '4n'],

  // 	// ['B4', '8n'],
  // 	// ['A4', '8n'],
  // 	// ['G4', '4n'],
  // 	// ['G4', '4n'],

  // 	// ['G4', '4n'],
  // 	// ['B4', '4n'],
  // 	// ['D4', '4n'],

  // 	// ['C4', '8n'],
  // 	// ['H4', '8n'],
  // 	// ['F4', '2n'],

  // 	// ['C4', '4n'],
  // 	// ['A4', '4n'],
  // 	// ['A4', '4n'],

  // ]

  // // notesToPlay.forEach(rytm => {
  // // 	const [r, n] = rytm;
  // // 	r.split('').forEach(l => play(`${l.toUpperCase()}3`, n))
  // // })

  // notesToPlay.forEach(notes => play(...notes))

  // play('F4', '4n');
  // play('E4', '8n');
  // play('Eb4', '4n');
  // play('B4', '8n');

  // play('Eb4', '8n');
  // play('D4', '4n');
  // play('C#4', '8n');
  // play('C#4', '4n');
  // play('Bb4', '8n');

  // play('G4', '4n');
  // play('G4', '4n');
  // play('Bb4', '8n');

  // play('A4', '2n');
  // play('C4', '4n');
  // play('B4', '4n');

  // play('G4', '2n');
  // play('B4', '4n');

  // play('E4', '2n');
  // play('E4', '2n');

  // play('C4', '8n');
  // play('E4', '8n');
  // play('C4', '2n');

};

export default () => {
  const [state, setState] = useState({ play: false });

  if (state.play) {
    playSong2();
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
        onClick={() => setState({ play: !state.play })}
      >
        {state.play ? 'Playing' : 'Play'}

      </button>
    </div>
  );
};
