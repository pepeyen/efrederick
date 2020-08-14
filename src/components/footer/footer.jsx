import React from 'react'
import {useSelector} from 'react-redux';

//Components
import LangSelector from '../langSelector/langSelector';

//Styles
import './footer.scss';

//Language library
import {footer} from '../../language/lib/language-lib' 

function Footer() {
    const currentPageLanguage = useSelector(state => state.pageLanguage);
    const pageText = footer[currentPageLanguage]; 

    return (
        <div className="footer">
            <div className="footer__text">
                <div className="footer__logo">
                    <p>eFrederick</p>
                </div>
                <div className="footer__credits --spaced-from-top">
                    {pageText[0]}
                </div>
                <div className="footer__social">
                    <div className="footer__social-link --spaced-from-top">
                    <a 
                        className="footer__outside-link" 
                        href="https://www.linkedin.com/in/erick-frederick-c/" 
                        target="_blank" rel="noopener noreferrer"
                    >
                        Linkedin
                    </a>
                    </div>
                    <div className="footer__social-link --spaced-from-top">
                    <a 
                        className="footer__outside-link" 
                        href="https://github.com/pepeyen" 
                        target="_blank" rel="noopener noreferrer"
                    >
                        Github
                    </a>
                    </div>
                </div>
                <LangSelector />
            </div>
        </div>
    );
}

export default Footer;