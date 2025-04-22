// src/components/pages/discography.js
import React from 'react';
import albums from './discography/albums.json';
import '../../styles/discography.css';

export default function Discography() {
  return (
    <div className='section-container'>
        <div className="discography-container">
        <div className="albumcontainer">
            {albums.map(album => (
            <div key={album.id} className="album-card">
                <div className="album-image">
                <img src={album.img} alt={`${album.band} - ${album.title}`} />
                </div>
                <div className="album-info">
                <div className="album-band">{album.band}</div>
                <div className="album-title">{album.title}</div>
                <div className="album-year">{album.year}</div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
}