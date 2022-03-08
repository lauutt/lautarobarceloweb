import React from 'react';
import bio from './bio/bio.txt'
import './bio/index.css'
import text from './bio/biotext.js'


export default function Bio() {
    const Bioblock = ({text}) => {
        return (
        <div className='block'>
            <p>{text}</p>
        </div>
        )
    }
    
    return ( <div>
                {text.map((t, curr) => <Bioblock key={curr} text={t}/>)}
            </div>
    )
}