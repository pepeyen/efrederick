import React, { useState } from 'react';
import {useSelector} from 'react-redux';

//Styles
import './contact.scss';
import '../pages.scss';

//Language library
import {contact} from '../../language/lib';

function Contact () {
  const currentPageLanguage = useSelector(state => state.pageLanguage);
  const pageText = contact[currentPageLanguage]; 
  const [status,setStatus] = useState("");

  let submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };
  return (
    <article id="contact">  
      <div className="title --reverted">{pageText[0]}</div>
      <div className="container">
        <div className="contact">
          <div className="contact__title">{pageText[1]}</div>
          <form
            className="contact__form"
            onSubmit={submitForm}
            action="https://formspree.io/mknqyejb"
            method="POST"
          >
            <div className="contact__form-input">
              <label htmlFor = "email">Email</label>
              <input 
                className="contact__form-email" 
                type="email" 
                name="email" 
              />
            </div>
            <div className="contact__form-input">
              <label htmlFor = "message">{pageText[2]}</label>
              <textarea 
                className="contact__form-message" 
                name="message" 
              />
            </div>
            <div className="contact__form-submit">
              {status === "SUCCESS" ? <p>{pageText[3]}</p> : <button className="contact__form-button">{pageText[4]}</button>}
              {status === "ERROR" && <p>{pageText[5]}</p>} 
            </div>
          </form>
        </div>
      </div>
    </article>  
  );
}

export default Contact;