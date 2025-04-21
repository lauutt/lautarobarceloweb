import React from 'react';
import './bio/index.css'
import { Text } from '../../containers/Language.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';


export default function Bio() {
    
    return ( <div style={{ marginLeft: '2%', marginRight: '2% ' }}>
                <Text tid='bio_text'/>
                <div className="social-icons" style={{ marginTop: '2%'}}>
                    <a href="https://www.instagram.com/lautarodelpasado/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://github.com/lauutt" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/lautaro-barcel%C3%B3-04a68616/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://twitter.com/LautaroBarcelo" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/search/top?q=lautaro%20barcel%C3%B3" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    </div>
                    <div style={{ marginTop: '2%'}}> 
                        <Text tid ='bio_text_2'/>
                    </div>  
                </div>
                
            
    )
}