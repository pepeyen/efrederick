import React from 'react';
import '../pages.scss'

function About() {
  return (
    <div id="about" className = "article">
        <div className="artcile__title">About</div>
        <div className = "article__box">
            <div className = "article__text">
                <p>Hi i'm Erick Frederick i love web developing and programming</p>
                <p>My few close loves are from front-end as <span>HTML</span>, <span>CSS</span>, <span>React.JS</span></p>
                <p>I also love programming with <span>C</span> and <span>C#</span></p>
                <p>Looking for a developer?</p>
                <p>You can reach me at the end of the page</p>
            </div>
            <div className = "article__image --about"/>
        </div>
    </div>
  );
}

export default About;