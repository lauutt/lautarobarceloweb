import React from 'react';
import albums from './discography/albums.json'
import Card from './discography/card'
import Stats from './discography/stats'
import './discography/index.css'
import Modal from './discography/modal'


export default function Discography() {
    return (
        <div>
            <div className='block'>    
            </div>
            <div className='albumcontainer'>
                {albums.map(album => (
                    <Card key={album.id} title={album.title} band={album.band} img={album.img} year={album.year} key={album.id}/>
                ))}
            </div>
        </div>
    )
}