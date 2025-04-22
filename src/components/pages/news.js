// src/components/pages/news.js
import React, { useState, useContext, useEffect } from 'react';
import { LanguageContext } from '../../containers/Language';
import '../../styles/news.css';

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userLanguage } = useContext(LanguageContext);
  
  // Configuración GitHub
  const githubUser = 'lauutt';
  const githubRepo = 'news';
  const githubBranch = 'main';
  const CACHE_EXPIRATION = 15 * 60 * 1000;
  
  useEffect(() => {
    // Lógica de fetching (manteniendo el mismo código que tenías)
    setLoading(true);
    setError(null);
    
    const url = `https://raw.githubusercontent.com/${githubUser}/${githubRepo}/${githubBranch}/content/news/${userLanguage}.json`;
    const cacheKey = `news_cache_${userLanguage}`;
    const cachedData = localStorage.getItem(cacheKey);
    
    // Verificar el caché y hacer fetch si es necesario...
    // (mantengo el mismo código que tenías para esta parte)
    
    if (cachedData) {
      try {
        const { timestamp, data } = JSON.parse(cachedData);
        const isExpired = Date.now() - timestamp > CACHE_EXPIRATION;
        
        if (!isExpired) {
          setNews(data);
          setLoading(false);
          return;
        }
      } catch (e) {
        console.error('Error parsing cache:', e);
        localStorage.removeItem(cacheKey);
      }
    }
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`No se encontró el archivo de noticias para el idioma ${userLanguage}`);
          }
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        if (!Array.isArray(data)) {
          throw new Error('El formato de los datos no es válido');
        }
        
        localStorage.setItem(cacheKey, JSON.stringify({
          timestamp: Date.now(),
          data: data
        }));
        
        setNews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        
        if (cachedData) {
          try {
            const { data } = JSON.parse(cachedData);
            setNews(data);
            setError(`Usando datos en caché. Error al actualizar: ${error.message}`);
          } catch (e) {
            setError(`No se pudieron cargar las noticias: ${error.message}`);
          }
        } else {
          setError(`No se pudieron cargar las noticias: ${error.message}`);
          setNews([]);
        }
        
        setLoading(false);
      });
  }, [userLanguage, githubUser, githubRepo, githubBranch]);

  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading">Cargando noticias...</p>
      </div>
    );
  }

  return (
    <div className="news-container">
      {error && (
        <div className="error-notification">
          <p>{error}</p>
        </div>
      )}
      
      {news.length > 0 ? (
        news.slice().reverse().map(item => (
          <div key={item.id} className="news-item">
            <div className="news-row">
              <div className="news-content">
                <h2 className="news-title">{item.title}</h2>
                <div className="news-subtitle">{item.subtitle}</div>
                <div className="news-body">{item.body}</div>
              </div>
              <div className="news-image">
                <img src={item.img} alt={item.title} />
                <a href={item.link} className="news-link" target="_blank" rel="noopener noreferrer">
                  {item.linktext}
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="no-news">
          <p>No hay noticias disponibles en este idioma.</p>
        </div>
      )}
    </div>
  );
}