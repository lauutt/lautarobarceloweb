import React from 'react';
import './index.css';

export default function Note({ title, subtitle, img, body, date, id, color, link, linktext }) {
    const invertOrderClass = id % 2 === 0 ? '' : 'is-flex-direction-row-reverse'; // Clase para alternar el orden de las columnas

    return (
        <div>
            <div className='nota'>
                <div className={`columns is-multiline ${invertOrderClass}`}>
                    <div className='column is-half-desktop is-full-mobile'>
                        <div className='container' style={{ backgroundColor: color, padding: 50 }}>
                            <h1 className='titulo'>{title.toUpperCase()}</h1>
                            <h4 className='subtitulo'>{subtitle}</h4>
                            <p className='contenido'>{body}</p>
                        </div>
                    </div>
                    <div className='column is-half-desktop is-full-mobile'>
                        <div className='container'>
                            <img src={img} alt="imagen"></img>
                            <a href={link} className='footlink'>{linktext}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
