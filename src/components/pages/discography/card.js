import React from 'react';
import './index.css'



export default function Card({title, band, img, year}) {

  return(
    <div className='card-container'>
      <div className="card" style={{backgroundColor:"white", borderBlockColor:"red", borderBlock:"5px solid black"}}>
        <div className="card-image" style={{padding:"5%"}}>
          <figure className="image">
            <img src={img} alt="Placeholder image"></img>
          </figure>
        </div>

        <div className="card-content" style={{color:"white"}}>
          <div className="media">

            <div className="media-content" >
              <p className="title is-6" style={{color:"black"}}><b>{band}</b> / {title}</p>
              <p className="subtitle is-6" style={{color:"black"}}>{year}</p>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  )


}



