import React from 'react';
import Nota from './press/nota'
import notas from './press/press.json'
import './press/index.css'


export default function Press() {
    const palette = [ "#eddcd2",
    "#fff1e6",
    "#fde2e4",
    "#fad2e1",
    "#c5dedd",
    "#dbe7e4",
    "#f0efeb",
    "#d6e2e9",
    "#bcd4e6",
    "#99c1de"];

   
    return (
        <div>  
            <div className='notescontainer'>
                {notas.map(nota => <Nota key={nota.id} media={nota.media} text={nota.text} who={nota.who} palette={palette}/>)}
            </div>
        </div>
    )
}