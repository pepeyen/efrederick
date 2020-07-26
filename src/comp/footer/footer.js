import React, {Component} from 'react';
import './footer.scss';

class Footer extends Component { 
    render() {
        return (
            <div className = "footer">
                <div className = "footer__text">
                    <div className = "footer__logo">
                        eFrederick
                    </div>
                    <div className = "footer__credits --spaced-from-top">
                        Made with love by me
                    </div>
                    <div className = "footer__social">
                        <div className = "footer__social-link --spaced-from-top">
                            <a className = "footer__outside-link" href = "https://www.linkedin.com/in/erick-frederick-c/" target = "_blank" rel="noopener noreferrer">Linkedin</a>
                        </div>
                        <div className = "footer__social-link --spaced-from-top">
                            <a className = "footer__outside-link" href = "https://github.com/pepeyen" target = "_blank" rel="noopener noreferrer">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
