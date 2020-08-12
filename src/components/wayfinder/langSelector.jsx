import React, {useState} from 'react'
import {useDispatch} from 'react-redux';

//Styles
import './wayfinder.scss';

import {setToENUS, setToPTBR} from '../../actions';

function LangSelector() {
    const [isPageEN_US, setIsPageEN_US] = useState(true);
    const [isPagePT_BR, setIsPagePT_BR] = useState(false);
    const dispatch = useDispatch();

    const buttonHandler = (e) => {
        e.preventDefault();

        switch (e.target.value) {
          case "en_us":
            dispatch(setToENUS());
            setIsPageEN_US(true);
            setIsPagePT_BR(false);

            break;
          case "pt_br":
            dispatch(setToPTBR());
            setIsPageEN_US(false);
            setIsPagePT_BR(true);
            
            break;
          default:
            break;
        }
    }

    return(
        <div className="wayfinder__lang">
            <button
            className={isPageEN_US ? "wayfinder__lang-button --en_us-active" : "wayfinder__lang-button --en_us"}
            value="en_us"
            onClick={buttonHandler}
            >
            en_us
            </button>
            <button 
            className={isPagePT_BR ? "wayfinder__lang-button --pt_br-active" : "wayfinder__lang-button --pt_br"}
            value="pt_br"
            onClick={buttonHandler}
            >
            pt_br
            </button>
        </div>
    );
}

export default LangSelector;