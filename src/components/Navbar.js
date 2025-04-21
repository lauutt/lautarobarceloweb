import React, {useContext, useState, useEffect} from 'react';
import LanguageSelector from './LanguageSelector';
import { languageOptions } from '../languages';
import { LanguageContext, Text } from '../containers/Language';
import { Link } from "react-router-dom";
import icon from '../img/icon.png'
import Contact from './Contact';



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true); // Estado para controlar la visibilidad del menú

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100; // Cambia el número según tu preferencia
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const padding = {
    padding: 5
  }
  const navItemsList = [
    'home',
    'news',
    'discography',
    'press',
    'bio'
  ];
  const { dictionary } = useContext(LanguageContext);
  const [menuSelection, setMenuSelection] = useState('index');
  const handleMenuSelection = () => {
    setMenuSelection("index");
  }

  const MenuItem = ({item}) => {
    return ( 
      <div>
      <Link className='navbar-item' to={"/"+item}><Text tid={item}/></Link>
      </div>
    )
  }





  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alternar entre abrir y cerrar el menú
  };

  return (
    <div>
      <header>
        <div className="navvvvv">
          <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">

              {/* Agrega un evento onClick para manejar el clic en el botón de la hamburguesa */}
              <a role="button" className={`navbar-burger ${menuOpen ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleMenu}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            {/* Renderiza el menú condicionalmente según el estado menuOpen */}
            <div id="navbarBasicExample" className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
              <div className="navbar-start">
                {navItemsList.map((item) => (
                  <MenuItem item={item} key={item} />
                ))}
                
                
              </div>
              <div className="navbar-end">
                <Contact/>
                <LanguageSelector />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}