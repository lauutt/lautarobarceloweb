import React, { useState, useContext, useEffect } from 'react';
import Nota from './press/nota';
import './press/index.css';
import { LanguageContext } from '../../containers/Language';

export default function Press() {
    const [pressData, setPressData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { userLanguage } = useContext(LanguageContext);
    
    // Paleta de colores para las notas de prensa
    const palette = [
        "#eddcd2", "#fff1e6", "#fde2e4", "#fad2e1", 
        "#c5dedd", "#dbe7e4", "#f0efeb", "#d6e2e9", 
        "#bcd4e6", "#99c1de"
    ];
    
    // Configuración GitHub - Usa los mismos valores que en News.js
    const githubUser = 'lauutt';
    const githubRepo = 'news';
    const githubBranch = 'main';
    
    // Tiempo de expiración del caché (15 minutos)
    const CACHE_EXPIRATION = 15 * 60 * 1000;
    
    useEffect(() => {
        setLoading(true);
        setError(null);
        
        // URL para acceder al archivo raw en GitHub
        const url = `https://raw.githubusercontent.com/${githubUser}/${githubRepo}/${githubBranch}/content/press/${userLanguage}.json`;
        
        // Intentar obtener del caché primero
        const cacheKey = `press_cache_${userLanguage}`;
        const cachedData = localStorage.getItem(cacheKey);
        
        if (cachedData) {
            try {
                const { timestamp, data } = JSON.parse(cachedData);
                const isExpired = Date.now() - timestamp > CACHE_EXPIRATION;
                
                if (!isExpired) {
                    // Usar datos en caché si no han expirado
                    setPressData(data);
                    setLoading(false);
                    return;
                }
            } catch (e) {
                console.error('Error parsing press cache:', e);
                localStorage.removeItem(cacheKey); // Eliminar caché corrupto
            }
        }
        
        // Si no hay caché o expiró, hacer petición a GitHub
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error(`No se encontraron datos de prensa para el idioma ${userLanguage}`);
                    }
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                // Validar que sea un array
                if (!Array.isArray(data)) {
                    throw new Error('El formato de los datos de prensa no es válido');
                }
                
                // Guardar en caché
                localStorage.setItem(cacheKey, JSON.stringify({
                    timestamp: Date.now(),
                    data: data
                }));
                
                setPressData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching press data:', error);
                
                // Intentar usar caché aunque haya expirado en caso de error
                if (cachedData) {
                    try {
                        const { data } = JSON.parse(cachedData);
                        setPressData(data);
                        setError(`Usando datos en caché. Error al actualizar: ${error.message}`);
                    } catch (e) {
                        setError(`No se pudieron cargar los datos de prensa: ${error.message}`);
                    }
                } else {
                    setError(`No se pudieron cargar los datos de prensa: ${error.message}`);
                    setPressData([]);
                }
                
                setLoading(false);
            });
    }, [userLanguage, githubUser, githubRepo, githubBranch]);

    // Renderizado condicional según el estado
    if (loading) {
        return (
            <div className="loading-container">
                <div className='section-container'>
                <p className="loading">Cargando reseñas de prensa...</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className='section-container'> 
            {error && (
                <div className="error-notification">
                    <p>{error}</p>
                </div>
            )}
            
            <div className="notescontainer">
                {pressData.length > 0 ? (
                    pressData.map(nota => (
                        <Nota 
                            key={nota.id} 
                            media={nota.media} 
                            text={nota.text} 
                            who={nota.who} 
                            palette={palette}
                        />
                    ))
                ) : (
                    <div className="no-press">
                        <p>No hay reseñas de prensa disponibles en este idioma.</p>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
}