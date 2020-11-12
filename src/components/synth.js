import React, { useState } from 'react';
import * as Tone from 'tone';
import './hexagon/hexagon.css';

function Synthesizer() {


    function note(event) {
        event.preventDefault();
        //create a synth and connect it to the main output (your speakers)
        const synth = new Tone.Synth().toDestination();

        //play a middle 'C' for the duration of an 8th note
        const seq = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, 0.1, time);

        }, ["C3", ["B2", "C2", "B3"], "F4", "F3"]).start(0);
        Tone.Transport.start();

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
            <div  className="box" onClick={event => note(event)}>
            </div>
        
        </div>
        </div>
    )
}

export default Synthesizer;