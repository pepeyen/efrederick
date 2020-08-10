import React, { Component } from 'react';

//Styles
import './contact.scss'
import '../pages.scss'

//Language library
import {contact} from '../../language/lib/language-lib'


class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      pageLanguage: this.props.pageLanguage,
      pageText : contact.en_us
    };
  }
  
  componentDidUpdate(prevProps){
    if(prevProps.pageLanguage !== this.props.pageLanguage){
      this.setState({
        pageText : contact[this.props.pageLanguage]
      });
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
      <article id="contact">  
        <div className="title --reverted">{this.state.pageText[0]}</div>
          <div className="container">
            <div className="contact">
              <div className="contact__title">{this.state.pageText[1]}</div>
              <form
                className="contact__form"
                onSubmit={this.submitForm}
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
                  <label htmlFor = "message">{this.state.pageText[2]}</label>
                  <textarea 
                    className="contact__form-message" 
                    name="message" 
                  />
                </div>
                <div className="contact__form-submit">
                  {status === "SUCCESS" ? <p>{this.state.pageText[3]}</p> : <button className="contact__form-button">{this.state.pageText[4]}</button>}
                  {status === "ERROR" && <p>{this.state.pageText[5]}</p>} 
                </div>
              </form>
            </div>
        </div>
      </article>  
    );
  }
}

export default Contact;