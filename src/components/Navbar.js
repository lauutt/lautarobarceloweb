import React, {useContext, useState} from 'react';
import LanguageSelector from './LanguageSelector';
import { languageOptions } from '../languages';
import { LanguageContext, Text } from '../containers/Language';
import { Link } from "react-router-dom";
import icon from '../img/icon.png'



export default function Navbar() {
  const padding = {
    padding: 5
  }
  const navItemsList = [
    'home',
    'news',
    'discography',
    'press',
    'bio',
    'workshops',
    'contact'
  ];
  const { dictionary } = useContext(LanguageContext);
  const [menuSelection, setMenuSelection] = useState('index');
  const handleMenuSelection = () => {
    setMenuSelection("index");
    console.log(menuSelection)
  }

  const MenuItem = ({item}) => {
    return ( 
      <div>
      <Link className='navbar-item' to={"/"+item}><Text tid={item}/></Link>
      </div>
    )
  }



  const NavbarBrand = () => {
    return (
      <div className="navbar-brand">
      <a className="navbar-item" data-attr="img" href="/home">
        <img src={icon} width="100" height="28"></img>
      </a>
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    )
  }

  return (
    <div>
      <header> 
        <div className="navvvvv">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                  <div className="navbar-start">
                    {navItemsList.map(item => <MenuItem item={item} key={item}/>)}
                  </div>
                  <div className="navbar-end">
                    <LanguageSelector/>
                  </div>
                </div>

            </nav>
          </div>
      </header>
  </div>
  );
}