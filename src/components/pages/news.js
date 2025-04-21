import React, { useState, useContext, useEffect } from 'react';
import Note from './news/note';
import './news/index.css';
import { LanguageContext } from '../../containers/Language';


export default function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { userLanguage } = useContext(LanguageContext);
    
    // Configuración GitHub - Asegúrate de ajustar estos valores a tu repositorio
    const githubUser = 'lauutt';
    const githubRepo = 'news';
    const githubBranch = 'main';
    
    // Tiempo de expiración del caché (15 minutos)
    const CACHE_EXPIRATION = 15 * 60 * 1000;
    
    useEffect(() => {
        setLoading(true);
        setError(null);
        
        // URL para acceder al archivo raw en GitHub
        const url = `https://raw.githubusercontent.com/${githubUser}/${githubRepo}/${githubBranch}/content/news/${userLanguage}.json`;
        
        // Intentar obtener del caché primero
        const cacheKey = `news_cache_${userLanguage}`;
        const cachedData = localStorage.getItem(cacheKey);
        
        if (cachedData) {
            try {
                const { timestamp, data } = JSON.parse(cachedData);
                const isExpired = Date.now() - timestamp > CACHE_EXPIRATION;
                
                if (!isExpired) {
                    // Usar datos en caché si no han expirado
                    setNews(data);
                    setLoading(false);
                    return;
                }
            } catch (e) {
                // Si hay error al analizar el caché, simplemente continuar con la petición
                console.error('Error parsing cache:', e);
                localStorage.removeItem(cacheKey); // Eliminar caché corrupto
            }
        }
        
        // Si no hay caché o expiró, hacer petición a GitHub
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    // Si el archivo no existe (404) o hay otro error
                    if (response.status === 404) {
                        throw new Error(`No se encontró el archivo de noticias para el idioma ${userLanguage}`);
                    }
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                // Validar que sea un array
                if (!Array.isArray(data)) {
                    throw new Error('El formato de los datos no es válido');
                }
                
                // Guardar en caché
                localStorage.setItem(cacheKey, JSON.stringify({
                    timestamp: Date.now(),
                    data: data
                }));
                
                setNews(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching news:', error);
                
                // Intentar usar caché aunque haya expirado en caso de error
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

    // Renderizado condicional según el estado
    if (loading) {
        return (
            <div className="loading-container">
                <p className="loading">Cargando noticias...</p>
            </div>
        );
    }

    return (
        <div>
            {error && (
                <div className="error-notification">
                    <p>{error}</p>
                </div>
            )}
            
            <div className='notas'>
                {news.length > 0 ? (
                    news.slice().reverse().map(n => (
                        <Note
                            linktext={n.linktext}
                            link={n.link}
                            key={n.id}
                            color={n.color}
                            title={n.title}
                            subtitle={n.subtitle}
                            img={n.img}
                            date={n.date}
                            body={n.body}
                            id={n.id}
                        />
                    ))
                ) : (
                    <div className="no-news">
                        <p>No hay noticias disponibles en este idioma.</p>
                    </div>
                )}
            </div>
        </div>
    );
}