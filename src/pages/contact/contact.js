import React, { Component } from 'react';

//Styles
import './contact.scss'
import '../pages.scss'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      pageLanguage: this.props.pageLanguage,
      pageText : this.languageLibrary.en_us
    };
  }
  languageLibrary = {
    en_us: [
      "Contact",
      "Let's work together",
      "Message",
      "Thanks!",
      "Submit",
      "Ooops! There was an error."
    ],
    pt_br: [
      "Contato",
      "Vamos trabalhar juntos",
      "Menssagem",
      "Obrigado!",
      "Enviar",
      "Ooops! Ocorreu um erro."
    ]
  }; 

  componentDidUpdate(prevProps){
    if(prevProps.pageLanguage !== this.props.pageLanguage){
      this.updatePageLanguage()
    }
  };
  
  updatePageLanguage = () => {
    switch (this.props.pageLanguage) {
      case "en_us":
        this.setState({pageText : this.languageLibrary.en_us})
        break;
  
      case "pt_br":
        this.setState({pageText : this.languageLibrary.pt_br})
        break;
      
      default:
        break;
    }
  };

  submitForm(ev) {
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
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  };

  render () {
    const { status } = this.state;
    return (
      <div id="contact" className = "article">  
        <div className="article__title --reverted">{this.state.pageText[0]}</div>
          <div className = "article__box --contact">
            <div className = "article__contact">
              <div className = "article__contact-sub-title">{this.state.pageText[1]}</div>
              <form
                className = "article__contact-form"
                onSubmit={this.submitForm}
                action="https://formspree.io/mknqyejb"
                method="POST"
              >
                <div className = "article__contact-form-input">
                  <label htmlFor = "email">Email</label>
                  <input className = "article__contact-form-email" type="email" name="email" />
                </div>
                <div className = "article__contact-form-input">
                  <label htmlFor = "message">{this.state.pageText[2]}</label>
                  <textarea className = "article__contact-form-message" name="message" />
                </div>
                <div className = "article__contact-form-submit">
                  {status === "SUCCESS" ? <p>{this.state.pageText[3]}</p> : <button className = "article__contact-form-button">{this.state.pageText[4]}</button>}
                  {status === "ERROR" && <p>{this.state.pageText[5]}</p>} 
                </div>
              </form>
            </div>
        </div>
      </div>  
    );
  }
}

export default Contact;