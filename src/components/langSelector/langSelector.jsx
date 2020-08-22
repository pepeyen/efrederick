import React, {useState} from 'react'
import {useDispatch} from 'react-redux';

//Styles
import './langSelector.scss';

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
    <div className="lang-selector">
      <button
        className={isPageEN_US ? "lang-selector__button --en_us-active" : "lang-selector__button --en_us"}
        value="en_us"
        onClick={buttonHandler}
      >
        EN-US
      </button>
      <button 
        className={isPagePT_BR ? "lang-selector__button --pt_br-active" : "lang-selector__button --pt_br"}
        value="pt_br"
        onClick={buttonHandler}
      >
        PT-BR
      </button>
    </div>
  );
}

export default LangSelector;