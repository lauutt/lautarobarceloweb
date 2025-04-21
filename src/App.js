import React from 'react';
import { Helmet } from 'react-helmet';
import { LanguageProvider } from './containers/Language';
import Explore from './components/Explore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css'

function SEO() {
  return (
    <Helmet>
      <title>Lautaro Barceló - Portfolio</title>
      <meta name="description" content="Portfolio of Lautaro Barceló - musician, AI analyst, and programmer." />
      <meta name="keywords" content="Lautaro Barceló, music, AI, programming, portfolio" />
      <meta name="author" content="Lautaro Barceló" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Lautaro Barceló - Portfolio" />
      <meta property="og:description" content="Portfolio of Lautaro Barceló - musician, AI analyst, and programmer." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lautarobarcelo.com" />
      <meta property="og:image" content="https://lautarobarcelo.com/og-image.jpg" />
      <link rel="canonical" href="https://lautarobarcelo.com" />
    </Helmet>
  );
}

function App() {
  return (
    <div className='container'>
      <LanguageProvider>
        <SEO />
        <Navbar/>
        <Explore/>
        <Footer/>
      </LanguageProvider>
    </div>
  );
}

export default App;