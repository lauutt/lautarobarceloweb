import React from 'react';
import albums from './discography/albums.json';
import '../../styles/discography.css';

export default function Discography() {
  // Ordenar los álbumes por año (de más reciente a más antiguo)
  const sortedAlbums = [...albums].sort((a, b) => b.year - a.year);

  return (
    <div className='section-container'>
        <div className="discography-container">
          {/* Playlist de Spotify */}
          <div className="spotify-playlist-container">
            <div className="spotify-embed">
              <iframe 
                style={{borderRadius: "12px"}} 
                src="https://open.spotify.com/embed/playlist/1OYe2S2dxTFltyHcJkPfe2?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
              </iframe>
            </div>
          </div>
          
          {/* Separador */}
          <div className="playlist-album-divider"></div>
          
          {/* Álbumes */}
          <div className="albumcontainer">
              {sortedAlbums.map(album => (
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