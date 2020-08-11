import React, { useState } from 'react'
import {useDispatch} from 'react-redux';

//Styles
import './footer.scss';

//Language library
import {footer} from '../../language/lib/language-lib' 

import {setToENUS, setToPTBR} from '../../actions';

function Footer() {
    const [pageText, setPageText] = useState(footer.en_us);
    const dispatch = useDispatch();
    
    const dropdownHandler = (e) => {
        switch (e.target.value){
            case "en_us":
                dispatch(setToENUS());
                setPageText(footer[e.target.value]);
                break;
            case "pt_br":
                dispatch(setToPTBR());
                setPageText(footer[e.target.value]);
                break;
            default:
                break;
        }
    }

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
                <div className="footer__lang">
                    <select 
                        onChange={dropdownHandler} 
                        name="languages" 
                        id="languages-dropdown"
                        className="footer__lang-dropdown"
                    >
                    <option value="en_us">{pageText[1]}</option>
                    <option value="pt_br">{pageText[2]}</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Footer;