(this.webpackJsonpefrederick=this.webpackJsonpefrederick||[]).push([[0],[,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),c=(a(14),a(15),a(1)),o=a(2),l=a(4),u=a(3),m=(a(16),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).waydirectLiveStatus=["","","",""],n.waydirectVisibilityStatus="--hidden",n.languageLibrary={en_us:["About","Competencies","Projects","Contact"],pt_br:["Sobre","Compet\xeancias","Projetos","Contato"]},n.updatePageLanguage=function(){switch(n.props.pageLanguage){case"en_us":n.setState({pageText:n.languageLibrary.en_us});break;case"pt_br":n.setState({pageText:n.languageLibrary.pt_br})}},n.updateDimensions=function(){document.documentElement.clientWidth>=784&&(n.setState({width:window.innerWidth,height:window.innerHeight}),n.setState({isWaydirectsHidden:!0}),n.updateWaydirectState({targetedState:"waydirect-visibility"}))},n.updateWaydirectState=function(e){var t=e.targetedState,a=e.targetedWaydirect;switch(t){case"waydirect-visibility":!1===n.state.isWaydirectsHidden?(n.waydirectVisibilityStatus="--hidden",n.setState({isWaydirectsHidden:!0})):(n.waydirectVisibilityStatus="--visible",n.setState({isWaydirectsHidden:!1}));break;case"waydirect-live-status":for(var r=0;r<=a;r++)n.waydirectLiveStatus[r]="--visited";for(var i=n.waydirectLiveStatus.length--;i>a;i--)n.waydirectLiveStatus[i]="--unvisited"}},n.getScrollPercentage=function(e){return e/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100},n.getElementPosition=function(e){var t,a=document.getElementById(e);return t=document.documentElement.clientWidth>=784?15.5*Math.max(document.documentElement.clientHeight,window.innerHeight||0)/100:408,a.offsetTop-a.scrollTop-t},n.updateScreenPosition=function(e){window.scrollTo({top:n.getElementPosition(e),left:0,behavior:"smooth"})},n.wayfinderBarProgress=function(){n.setState({wayfinderProgress:"".concat(n.getScrollPercentage(window.scrollY),"%")}),window.scrollY>=n.getElementPosition("about")&&(n.updateWaydirectState({targetedState:"waydirect-live-status",targetedWaydirect:0}),window.scrollY>=n.getElementPosition("competencies")&&(n.updateWaydirectState({targetedState:"waydirect-live-status",targetedWaydirect:1}),window.scrollY>=n.getElementPosition("projects")&&(n.updateWaydirectState({targetedState:"waydirect-live-status",targetedWaydirect:2}),window.scrollY>=n.getElementPosition("contact")&&n.updateWaydirectState({targetedState:"waydirect-live-status",targetedWaydirect:3}))))},n.wayfinderRouteTo=function(e){switch(e){case"about":n.updateScreenPosition("about"),n.updateWaydirectState({targetedState:"waydirect-live-status",targetedWaydirect:0});break;case"competencies":n.updateScreenPosition("competencies"),n.updateWaydirectState({targetedState:"waydirect-live-status",targetedWaydirect:1});break;case"projects":n.updateScreenPosition("projects"),n.updateWaydirectState({targetedState:"waydirect-live-status",targetedWaydirect:2});break;case"contact":n.updateScreenPosition("contact"),n.updateWaydirectState({targetedState:"waydirect-live-status",targetedWaydirect:3})}},n.state={pageLanguage:n.props.pageLanguage,pageText:n.languageLibrary.en_us,deviceWidth:0,deviceHeight:0,wayfinderBarStyle:{},wayfinderProgress:"0%",isWaydirectsHidden:!0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions),window.addEventListener("scroll",this.wayfinderBarProgress),document.documentElement.clientWidth>=784&&(this.setState({width:window.innerWidth,height:window.innerHeight,isWaydirectsHidden:!0}),this.updateWaydirectState({targetedState:"waydirect-visibility"}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions),window.removeEventListener("scroll",this.wayfinderBarProgress)}},{key:"componentDidUpdate",value:function(e){e.pageLanguage!==this.props.pageLanguage&&this.updatePageLanguage()}},{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"wayfinder"},r.a.createElement("ul",{className:"wayfinder__waypaths"},r.a.createElement("div",{id:"wayfinder-about",className:"wayfinder__waydirect ".concat(this.waydirectLiveStatus[0]," ").concat(this.waydirectVisibilityStatus)},r.a.createElement("li",{onClick:function(){return e.wayfinderRouteTo("about")}},this.state.pageText[0])),r.a.createElement("div",{id:"wayfinder-competencies",className:"wayfinder__waydirect ".concat(this.waydirectLiveStatus[1]," ").concat(this.waydirectVisibilityStatus)},r.a.createElement("li",{onClick:function(){return e.wayfinderRouteTo("competencies")}},this.state.pageText[1])),r.a.createElement("div",{className:"wayfinder__waysign"},r.a.createElement("li",null,"eFrederick")),r.a.createElement("div",{id:"wayfinder-projects",className:"wayfinder__waydirect ".concat(this.waydirectLiveStatus[2]," ").concat(this.waydirectVisibilityStatus)},r.a.createElement("li",{onClick:function(){return e.wayfinderRouteTo("projects")}},this.state.pageText[2])),r.a.createElement("div",{id:"wayfinder-contact",className:"wayfinder__waydirect ".concat(this.waydirectLiveStatus[3]," ").concat(this.waydirectVisibilityStatus)},r.a.createElement("li",{onClick:function(){return e.wayfinderRouteTo("contact")}},this.state.pageText[3])),r.a.createElement("div",{className:"wayfinder__waypaths-bar",style:this.state.wayfinderBarStyle})),r.a.createElement("div",{onClick:function(){return e.updateWaydirectState({targetedState:"waydirect-visibility"})},className:"wayfinder__toggle"},r.a.createElement("div",{className:"wayfinder__hamburguer"})))}}]),a}(n.Component)),g=(a(17),a(5),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).languageLibrary={en_us:["About","Hi my name is Erick Frederick i'm Brazillian and i love programming","My few close loves are from front-end as ","I also love programming with "," and ","Looking for a developer?","You can reach me at the end of the page"],pt_br:["Sobre","Ol\xe1 meu nome \xe9 Erick Frederick sou Brasileiro e amo programar","Meus melhores amores v\xeam do front-end como ","Eu tamb\xe9m amo programar "," e ","Procurando um desenvolvedor?","Voc\xea pode entrar em contato comigo no final desta p\xe1gina"]},n.updatePageLanguage=function(){switch(n.props.pageLanguage){case"en_us":n.setState({pageText:n.languageLibrary.en_us});break;case"pt_br":n.setState({pageText:n.languageLibrary.pt_br})}},n.state={pageLanguage:n.props.pageLanguage,pageText:n.languageLibrary.en_us},n}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){e.pageLanguage!==this.props.pageLanguage&&this.updatePageLanguage()}},{key:"render",value:function(){return r.a.createElement("div",{id:"about",className:"article"},r.a.createElement("div",{className:"artcile__title"},this.state.pageText[0]),r.a.createElement("div",{className:"article__box  --about"},r.a.createElement("div",{className:"article__text"},r.a.createElement("p",null,this.state.pageText[1]),r.a.createElement("p",null,this.state.pageText[2],r.a.createElement("span",{className:"--language-html"},"HTML"),", ",r.a.createElement("span",{className:"--language-css"},"CSS"),", ",r.a.createElement("span",{className:"--language-reactjs"},"React.JS")),r.a.createElement("p",null,this.state.pageText[3],r.a.createElement("span",{className:"--language-c"},"C"),this.state.pageText[4],r.a.createElement("span",{className:"--language-dotnet"},"C#")),r.a.createElement("p",null,this.state.pageText[5]),r.a.createElement("p",null,this.state.pageText[6]))))}}]),a}(n.Component)),d=(a(18),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).languageLibrary={en_us:["Competencies","Career","Companies i've worked and what i worked with","Companies i've worked :","Technical Support Internship","Monitor and maintain Pitagora's computer systems and networks.","Which are my main loves from web development","Languages I speak :","Dev Tools :","Programming","Which are my loves aside from web development"],pt_br:["Compet\xeancias","Carreira","Empresas com quem eu trabalhei e com o que trabalhei","Empresas com quem eu trabalhei :","Est\xe1gio de Suporte T\xe9cnico ","Prover manunten\xe7\xe3o aos aparelhos digitais e de rede da empresa","Quais s\xe3o meus maiores amores de desenvolvimento web","L\xednguas qual eu falo :","Ferramentas Dev :","Programa\xe7\xe3o","Quais s\xe3o meus amores por fora do desenvolvimento web"]},n.updatePageLanguage=function(){switch(n.props.pageLanguage){case"en_us":n.setState({pageText:n.languageLibrary.en_us});break;case"pt_br":n.setState({pageText:n.languageLibrary.pt_br})}},n.state={pageLanguage:n.props.pageLanguage,pageText:n.languageLibrary.en_us},n}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){e.pageLanguage!==this.props.pageLanguage&&this.updatePageLanguage()}},{key:"render",value:function(){return r.a.createElement("div",{id:"competencies",className:"article"},r.a.createElement("div",{className:"artcile__title  --reverted"},this.state.pageText[0]),r.a.createElement("div",{className:"article__box --spaced"},r.a.createElement("div",{className:"competence"},r.a.createElement("div",{className:"competence__title"},this.state.pageText[1]),r.a.createElement("p",null,this.state.pageText[2]),r.a.createElement("div",{className:"competence__description"},r.a.createElement("span",null,this.state.pageText[3]),r.a.createElement("div",{className:"competence__sub-description"},r.a.createElement("p",null,"Faculdade Pit\xe1goras"),r.a.createElement("p",null,this.state.pageText[4]),r.a.createElement("p",null,this.state.pageText[5])))),r.a.createElement("div",{className:"competence --spaced-middle"},r.a.createElement("div",{className:"competence__title"},"Web Front End"),r.a.createElement("p",null,this.state.pageText[6]),r.a.createElement("div",{className:"competence__description"},r.a.createElement("span",null,this.state.pageText[7]),r.a.createElement("div",{className:"competence__sub-description"},r.a.createElement("p",null,"HTML"),r.a.createElement("p",null,"CSS"),r.a.createElement("p",null,"SCSS"),r.a.createElement("p",null,"Javascript"),r.a.createElement("p",null,"React.JS")),r.a.createElement("span",null,this.state.pageText[8]),r.a.createElement("div",{className:"competence__sub-description"},r.a.createElement("p",null,"Github"),r.a.createElement("p",null,"Terminal")))),r.a.createElement("div",{className:"competence"},r.a.createElement("div",{className:"competence__title"},this.state.pageText[9]),r.a.createElement("p",null,this.state.pageText[10]),r.a.createElement("div",{className:"competence__description"},r.a.createElement("span",null,this.state.pageText[7]),r.a.createElement("div",{className:"competence__sub-description"},r.a.createElement("p",null,"C"),r.a.createElement("p",null,"C#"),r.a.createElement("p",null,"Java")),r.a.createElement("span",null,this.state.pageText[8]),r.a.createElement("div",{className:"competence__sub-description"},r.a.createElement("p",null,"Visual Studio"))))))}}]),a}(n.Component)),p=(a(19),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).languageLibrary={en_us:["Projects","Click here to visit the webapp"],pt_br:["Projetos","Clique aqui para visitar o aplicativo web"]},n.updatePageLanguage=function(){switch(n.props.pageLanguage){case"en_us":n.setState({pageText:n.languageLibrary.en_us});break;case"pt_br":n.setState({pageText:n.languageLibrary.pt_br})}},n.state={pageLanguage:n.props.pageLanguage,pageText:n.languageLibrary.en_us},n}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){e.pageLanguage!==this.props.pageLanguage&&this.updatePageLanguage()}},{key:"render",value:function(){return r.a.createElement("div",{id:"projects",className:"article"},r.a.createElement("div",{className:"artcile__title"},this.state.pageText[0]),r.a.createElement("div",{className:"article__box --flex"},r.a.createElement("a",{className:"project__box",href:"https://pepeyen.github.io/efrederick-cli/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"project__image --efrederickcli"}),r.a.createElement("div",{className:"project__title"},"eFrederick CLI"),r.a.createElement("div",{className:"project__description"},this.state.pageText[1])),r.a.createElement("a",{className:"project__box",href:"https://pepeyen.github.io/cs-tech/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"project__image --cstech"}),r.a.createElement("div",{className:"project__title"},"CS Tech"),r.a.createElement("div",{className:"project__description"},this.state.pageText[1])),r.a.createElement("a",{className:"project__box",href:"https://pepeyen.github.io/efrederick/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"project__image --efrederick"}),r.a.createElement("div",{className:"project__title"},"eFrederick"),r.a.createElement("div",{className:"project__description"},this.state.pageText[1]))))}}]),a}(n.Component)),h=a(6),_=(a(20),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).languageLibrary={en_us:["Contact","Get in touch with me","Message","Thanks!","Submit","Ooops! There was an error."],pt_br:["Contato","Entre em contato comigo","Menssagem","Obrigado!","Enviar","Ooops! Ocorreu um erro."]},n.updatePageLanguage=function(){switch(n.props.pageLanguage){case"en_us":n.setState({pageText:n.languageLibrary.en_us});break;case"pt_br":n.setState({pageText:n.languageLibrary.pt_br})}},n.submitForm=n.submitForm.bind(Object(h.a)(n)),n.state={status:"",pageLanguage:n.props.pageLanguage,pageText:n.languageLibrary.en_us},n}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){e.pageLanguage!==this.props.pageLanguage&&this.updatePageLanguage()}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var a=e.target,n=new FormData(a),r=new XMLHttpRequest;r.open(a.method,a.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},r.send(n)}},{key:"render",value:function(){var e=this.state.status;return r.a.createElement("div",{id:"contact",className:"article"},r.a.createElement("div",{className:"artcile__title --reverted"},this.state.pageText[0]),r.a.createElement("div",{className:"article__box --contact"},r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"contact__sub-title"},this.state.pageText[1]),r.a.createElement("form",{className:"contact__form",onSubmit:this.submitForm,action:"https://formspree.io/mgennyyw",method:"POST"},r.a.createElement("div",{className:"contact__form-input"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:"contact__form-email",type:"email",name:"email"})),r.a.createElement("div",{className:"contact__form-input"},r.a.createElement("label",{htmlFor:"message"},this.state.pageText[2]),r.a.createElement("textarea",{className:"contact__form-message",name:"message"})),r.a.createElement("div",{className:"contact__form-submit"},"SUCCESS"===e?r.a.createElement("p",null,this.state.pageText[3]):r.a.createElement("button",{className:"contact__form-button"},this.state.pageText[4]),"ERROR"===e&&r.a.createElement("p",null,this.state.pageText[5]))))))}}]),a}(n.Component)),v=(a(21),a(22),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).languageLibrary={en_us:["Made with love by me","English","Portuguese"],pt_br:["Feito com amor por mim","Ingl\xeas","Portugu\xeas"]},n.updatePageLanguage=function(e){switch(e){case"en_us":n.setState({pageText:n.languageLibrary.en_us});break;case"pt_br":n.setState({pageText:n.languageLibrary.pt_br})}},n.__handleLanguage=function(e){n.setState({pageLanguage:e.target.value}),n.updatePageLanguage(e.target.value)},n.state={pageLanguage:"en_us",pageText:n.languageLibrary.en_us},n.updatePageLanguage(),n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(m,{pageLanguage:this.state.pageLanguage})),r.a.createElement("main",null,r.a.createElement(g,{pageLanguage:this.state.pageLanguage}),r.a.createElement(d,{pageLanguage:this.state.pageLanguage}),r.a.createElement(p,{pageLanguage:this.state.pageLanguage}),r.a.createElement(_,{pageLanguage:this.state.pageLanguage})),r.a.createElement("footer",null,r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer__text"},r.a.createElement("div",{className:"footer__logo"},"eFrederick"),r.a.createElement("div",{className:"footer__credits --spaced-from-top"},this.state.pageText[0]),r.a.createElement("div",{className:"footer__social"},r.a.createElement("div",{className:"footer__social-link --spaced-from-top"},r.a.createElement("a",{className:"footer__outside-link",href:"https://www.linkedin.com/in/erick-frederick-c/",target:"_blank",rel:"noopener noreferrer"},"Linkedin")),r.a.createElement("div",{className:"footer__social-link --spaced-from-top"},r.a.createElement("a",{className:"footer__outside-link",href:"https://github.com/pepeyen",target:"_blank",rel:"noopener noreferrer"},"Github"))),r.a.createElement("div",{className:"footer__lang"},r.a.createElement("select",{value:this.state.pageLanguage,onChange:this.__handleLanguage,name:"languages",id:"languages-dropdown",className:"footer__lang-dropdown"},r.a.createElement("option",{value:"en_us"},this.state.pageText[1]),r.a.createElement("option",{value:"pt_br"},this.state.pageText[2])))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.929bcb87.chunk.js.map