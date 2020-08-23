import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

//Styles
import './langSelector.scss';

import {setToENUS, setToPTBR} from '../../actions';

function LangSelector() {
  const dispatch = useDispatch();
  const [pageCurrentLang, setPageCurrentLang] = useState("en_US");

  //Dispatches the desired page language
  const buttonHandler = (e) => {
    e.preventDefault();

    switch (e.target.value) {
      case "en_US":
        dispatch(setToENUS());
        setPageCurrentLang("en_US");
        break;
      case "pt_BR":
        dispatch(setToPTBR());
        setPageCurrentLang("pt_BR");  
        break;
      default:
        break;
      }
  }

  return(
    <div className="lang-selector">
      <button
        className={pageCurrentLang === "en_US" ? "lang-selector__button --en_US-active" : "lang-selector__button --en_US"}
        value="en_US"
        onClick={buttonHandler}
      >
        EN-US
      </button>
      <button 
        className={pageCurrentLang === "pt_BR" ? "lang-selector__button --pt_BR-active" : "lang-selector__button --pt_BR"}
        value="pt_BR"
        onClick={buttonHandler}
      >
        PT-BR
      </button>
    </div>
  );
}

export default LangSelector;