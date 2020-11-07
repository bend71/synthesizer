import React from 'react';
import * as Tone from 'tone';

function Synthesizer() {

    let noteArray = ["c3", "c4", "c5"];

    function note(event, note) {
        event.preventDefault();
        //create a synth and connect it to the main output (your speakers)
        const synth = new Tone.Synth().toDestination();

        //play a middle 'C' for the duration of an 8th note
        synth.triggerAttackRelease(note , "4n");

    }

    return (
        <>
            {noteArray.map((notes, index) => <button key={index} onClick={event => note(event, notes)}>{notes}</button>)}
        </>
    )
}

export default Synthesizer;