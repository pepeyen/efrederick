import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {setLanguage} from '../actions';

const LangSelector = () => {
	const dispatch = useDispatch();
	const [pageCurrentLang, setPageCurrentLang] = useState("en_US");

  	//Dispatches the desired page language
	const buttonHandler = (e) => {
		e.preventDefault();

		dispatch(setLanguage(e.target.value));
		setPageCurrentLang(e.target.value);
		document.documentElement.setAttribute('lang', e.target.value.split('_')[0]);
  	};

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
};

export default LangSelector;