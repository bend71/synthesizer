import React from 'react';
import * as Tone from 'tone';

function Synthesizer() {

    let allNote = [["c3", "4n"], ["c4", "8n"], ["c5", "16n"]]

    function note(event, note, length) {
        event.preventDefault();
        //create a synth and connect it to the main output (your speakers)
        const synth = new Tone.Synth().toDestination();

        //play a middle 'C' for the duration of an 8th note
        synth.triggerAttackRelease(note, length);

    }

    return (
        <>
            {allNote.map((notes, index) => 
            <button key={index} onClick={event => note(event, notes[0], notes[1])}>{notes[0]}</button>
            )}
        </>
    )
}

export default Synthesizer;