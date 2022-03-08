import React from 'react';
import './index.css'




export default function Note({title, subtitle, img, body, date, id, color, link, linktext}) {
   
  if (id % 2 === 0) {
    return(
        <div>
            <div className='nota'>
                <div className="columns">
                    <div className="column" style={{backgroundColor:color}}>
                            <h1 className='titulo'>{title.toUpperCase()}</h1>
                            <h2 className='subtitulo'>{subtitle}</h2>
                            <p className='contenido'>{body}</p>
                            { link &&
                            <a className='footlink'>{linktext}</a>
                            }
                         
                    </div>
                    <div className="column">
                    <img src={img}></img>
                    </div>
                </div>
            </div>
        </div>
      )
  } else {
      return (
        <div>
            <div className='nota'>
                <div className="columns">
                    <div className="column">
                    <img src={img}></img>
                    </div>
                    <div className="column" style={{backgroundColor:color}}>        
                            <h1 className='titulo'>{title.toUpperCase()}</h1>
                            <h2 className='subtitulo'>{subtitle}</h2>
                            <p className='contenido'>{body}</p>
                            { link &&
                            <a className='footlink'>{linktext}</a>
                            }
                    </div>
                </div>
            </div>
        </div> 
      )
  }
  }


