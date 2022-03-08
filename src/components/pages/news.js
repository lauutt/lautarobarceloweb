import React from 'react';
import portada from './portada.jpg'
import news from './news/index.json'
import Note from './news/note'
import './news/index.css'

export default function News() {
    return (
        <div>         
            <div className='notas'>
                {news.map(n => <Note linktext={n.linktext} link={n.link} key={n.id} color={n.color} title={n.title} subtitle={n.subtitle} img={n.img} date={n.date} body={n.body} id={n.id}/>)}
            </div>
        </div>
    )
}