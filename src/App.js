// src/App.js
import React from 'react';
import { LanguageProvider } from './containers/Language';
import Explore from './components/Explore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/variables.css';
import './styles/layout.css';
import './index.css';

function App() {
  return (
    <div className='app-container'>
      <LanguageProvider>
        <Navbar />
        <main className="app-content">
          <Explore />
        </main>
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;