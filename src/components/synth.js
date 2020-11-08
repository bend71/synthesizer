import React from 'react';
import * as Tone from 'tone';
import './hexagon/hexagon.css';

function Synthesizer() {

    let allNote = [["c3", "4n"], ["c4", "8n"], ["c5", "16n"], ["d3", "4n"], ["d4", "8n"], ["d5", "16n"], ["f3", "4n"], ["g4", "8n"], ["b5", "16n"]]
    // Tone.Transport.start();


    function note(event, note, length) {
        event.preventDefault();
        //create a synth and connect it to the main output (your speakers)
        const synth = new Tone.Synth().toDestination();

        //play a middle 'C' for the duration of an 8th note
        synth.triggerAttackRelease(note, length);

    }

    // function sequence(event, note, length) {
    //     event.preventDefault();

    //     const synthOne = new Tone.FMSynth().toDestination();

    //     const loopOne = new Tone.Loop(time => {
    //         synthOne.triggerAttackRelease("C2", "8n", time);
    //     }, "4n").start("8n");
        
    // }

    return (
        <div className="body">
        <div className="container">
            {allNote.map((notes, index) => 
            <div  className="box" key={index} onClick={event => note(event, notes[0], notes[1])}>{notes[0]}</div>
            )}
            {/* <button onClick={event => sequence(event)}>sequence</button> */}
        </div>
        <div className="container">
            {allNote.map((notes, index) => 
            <div  className="box" key={index} onClick={event => note(event, notes[0], notes[1])}>{notes[0]}</div>
            )}
            {/* <button onClick={event => sequence(event)}>sequence</button> */}
        </div>
        <div className="container">
            {allNote.map((notes, index) => 
            <div  className="box" key={index} onClick={event => note(event, notes[0], notes[1])}>{notes[0]}</div>
            )}
            {/* <button onClick={event => sequence(event)}>sequence</button> */}
        </div>
        </div>
    )
}

export default Synthesizer;