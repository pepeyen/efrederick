import React, { useState } from 'react';
import {useSelector} from 'react-redux';

//Language library
import {contact} from '../language/lib';

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
					<form
						className="contact__form"
						onSubmit={submitForm}
						action="https://formspree.io/mknqyejb"
						method="POST"
					>
						<div className="contact__title">{pageText[1]}</div>
						<div className="contact__form-input">
							<label htmlFor = "email">Email</label>
							<input 
								id="email" 
								name="email" 
								className="contact__form-email --box-shadowed" 
								type="email" 
							/>
						</div>
						<div className="contact__form-input ">
							<label htmlFor = "message">{pageText[2]}</label>
							<textarea 
								id="message" 
								name="message" 
								className="contact__form-message --box-shadowed"
							/>
						</div>
						<div className="contact__form-submit">
							{status === "SUCCESS" ? <p>{pageText[3]}</p> : <button className="contact__form-button --box-shadowed">{pageText[4]}</button>}
							{status === "ERROR" && <p>{pageText[5]}</p>} 
						</div>
					</form>
					<svg
						viewBox="0 0 800 601"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							opacity="0.25"
							d="M712.5 0.293968H87.5C39.2532 0.293968 3.05176e-05 37.5399 3.05176e-05 83.3197V415.422C3.05176e-05 457.177 32.6516 491.831 75 497.603V576.56C75 586.188 81.0578 594.791 90.4328 598.476C93.5453 599.7 96.8 600.294 100.027 600.294C106.519 600.294 112.884 597.883 117.678 593.335L217.678 498.448H712.5C760.747 498.448 800 461.202 800 415.422V83.3197C800 37.5384 760.747 0.293968 712.5 0.293968ZM775 415.422C775 448.123 746.963 474.727 712.5 474.727H212.5C209.184 474.727 206.005 475.976 203.661 478.2L100 576.552V486.587C100 480.037 94.4032 474.727 87.5 474.727C53.0375 474.727 25 448.123 25 415.422V83.3197C25 50.6194 53.0375 24.0156 87.5 24.0156H712.5C746.963 24.0156 775 50.6194 775 83.3197V415.422Z"
							fill="#22D1EE"
						/>
					</svg>
				</div>
			</div>
		</article>  
	);
}

export default Contact;