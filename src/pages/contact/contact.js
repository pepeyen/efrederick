import React, { Component } from 'react';
import '../pages.scss'

class Contact extends Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }
    render () {
      const { status } = this.state;
      return (
        <div id="contact" className = "article">  
            <div className="artcile__title --reverted">Contact</div>
                <div className = "article__box">
                    <div className = "article__text">
                        <div className = "contact">
                            <div className = "article__sub-title">Get in touch with me</div>
                            <form
                                className = "contact__form"
                                onSubmit={this.submitForm}
                                action="https://formspree.io/mgennyyw"
                                method="POST"
                            >
                                <div className = "contact__form-input">
                                    <label htmlFor = "email">Email</label>
                                    <input className = "contact__form-email" type="email" name="email" />
                                </div>
                                <div className = "contact__form-input">
                                    <label htmlFor = "message">Message</label>
                                    <textarea className = "contact__form-message" name="message" />
                                </div>
                                <div className = "contact__form-submit">
                                    {status === "SUCCESS" ? <p>Thanks!</p> : <button className = "contact__form-button">Submit</button>}
                                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className = "article__image --contact"/>
            </div>
        </div>  
      );
    }
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
    }
}

export default Contact;