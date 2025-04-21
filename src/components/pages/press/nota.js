import React from 'react';


export default function Nota({text, media, who, palette}) {
    const randomColour = palette[Math.floor(Math.random() * palette.length)]

    return (
        <div>
            <div className='column'>
                <div className="card" style={{backgroundColor:randomColour}} >
                    <div className="card-content">
                        <p className="title" style={{fontSize:"large"}}>
                        {text}
                        </p>
                        <p className="subtitle" style={{fontSize:"medium", backgroundColor:'black', color:'white', opacity:'0.7', fontWeight:'bold', marginTop:"10%", marginBottom:"5%"}}>
                        {media}
                        </p>
                        <button className="button is-dark">{who}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}