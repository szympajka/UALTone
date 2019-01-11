import React from 'react';
import Tone from 'tone';

window.Tone = Tone;

// //create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();

synth.triggerAttackRelease('G4', 0.5, 0)
synth.triggerAttackRelease('E4', 0.5, 1/2)
synth.triggerAttackRelease('E4', 0.5, 2/2)
synth.triggerAttackRelease('F4', 0.5, 3/2)
synth.triggerAttackRelease('D4', 0.5, 4/2)
synth.triggerAttackRelease('D4', 0.5, 5/2)
synth.triggerAttackRelease('C4', 0.5, 6/2)
synth.triggerAttackRelease('E4', 0.5, 7/2)
synth.triggerAttackRelease('G4', 0.5, 8/2)
synth.triggerAttackRelease('G4', 0.5, 9/2)
synth.triggerAttackRelease('E4', 0.5, 10/2)
synth.triggerAttackRelease('E4', 0.5, 11/2)
synth.triggerAttackRelease('F4', 0.5, 12/2)
synth.triggerAttackRelease('D4', 0.5, 13/2)
synth.triggerAttackRelease('D4', 0.5, 14/2)
synth.triggerAttackRelease('C4', 0.5, 15/2)
synth.triggerAttackRelease('E4', 0.5, 16/2)
synth.triggerAttackRelease('C4', 0.5, 17/2)

// // synth.triggerAttackRelease('A2', 0.5, 0)
// synth.triggerAttackRelease('B2', 0.5, 1)
// synth.triggerAttackRelease('C3', 0.5, 2)
// synth.triggerAttackRelease('D3', 0.5, 3)
// synth.triggerAttackRelease('E3', 0.5, 4)
// synth.triggerAttackRelease('F3', 0.5, 5)
// synth.triggerAttackRelease('G3', 0.5, 6)
// synth.triggerAttackRelease('A3', 0.5, 7)
// synth.triggerAttackRelease('B3', 0.5, 8)
// synth.triggerAttackRelease('C4', 0.5, 9)
// synth.triggerAttackRelease('D4', 0.5, 10)
// synth.triggerAttackRelease('E4', 0.5, 11)
// synth.triggerAttackRelease('F4', 0.5, 12)
// synth.triggerAttackRelease('G4', 0.5, 13)

// var synth = new Tone.FMSynth().toMaster()

// //schedule a series of notes to play as soon as the page loads
// synth.triggerAttackRelease('C4', '4n', '8n')
// synth.triggerAttackRelease('E4', '8n', Tone.Time('4n') + Tone.Time('8n'))
// synth.triggerAttackRelease('G4', '16n', '2n')
// synth.triggerAttackRelease('B4', '16n', Tone.Time('2n') + Tone.Time('8t'))
// synth.triggerAttackRelease('G4', '16', Tone.Time('2n') + Tone.Time('8t')*2)
// synth.triggerAttackRelease('E4', '2n', '0:3')

var synth = new Tone.Synth().toMaster()

//pass in an array of events
var part = new Tone.Part(function(time, event){
	//the events will be given to the callback with the time they occur
	synth.triggerAttackRelease(event.note, event.dur, time)
	
}, [

	{ time : 0, note : 'G4', /*dur : '4n'*/},
	{ time : 1, note : 'E4', /*dur : '4n'*/},
	{ time : 2, note : 'E4', /*dur : '4n'*/},
	{ time : 3, note : 'F4', /*dur : '4n'*/},
	{ time : 4, note : 'D4', /*dur : '4n'*/},
	{ time : 5, note : 'D4', /*dur : '4n'*/},
	{ time : 6, note : 'C4', /*dur : '4n'*/},
	{ time : 7, note : 'E4', /*dur : '4n'*/},
	{ time : 8, note : 'G4', /*dur : '4n'*/},

	{ time : 0, note : 'G4', /*dur : '4n'*/},
	{ time : 1, note : 'E4', /*dur : '4n'*/},
	{ time : 2, note : 'E4', /*dur : '4n'*/},
	{ time : 3, note : 'F4', /*dur : '4n'*/},
	{ time : 4, note : 'D4', /*dur : '4n'*/},
	{ time : 5, note : 'D4', /*dur : '4n'*/},
	{ time : 6, note : 'C4', /*dur : '4n'*/},
	{ time : 7, note : 'E4', /*dur : '4n'*/},
	{ time : 8, note : 'C4', /*dur : '4n'*/},
])

//start the part at the beginning of the Transport's timeline
part.start(0)

//loop the part 3 times
part.loop = 3
part.loopEnd = '1m'

//start/stop the transport
// document.querySelector('tone-play-toggle').addEventListener('change', e => Tone.Transport.toggle())

export default () => {
  return <div onClick={() => {
    Tone.Transport.toggle()
  }} >heelo</div>
}