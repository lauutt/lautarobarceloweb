import React, { useState, useEffect } from 'react';
import Note from './news/note';
import './news/index.css';

export default function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://lautarobarcelo.com/api.php')
            .then(response => response.json())
            .then(data => setNews(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>         
            <div className='notas'>
                {news.map(n => (
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
                ))}
            </div>
        </div>
    );
}