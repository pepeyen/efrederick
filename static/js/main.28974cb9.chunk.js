(this.webpackJsonpefrederick=this.webpackJsonpefrederick||[]).push([[0],[,,,,function(e,t,a){},,,,,,,function(e,t,a){e.exports=a(32)},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),o=a(2),i=a(1),s=function(e){var t,a=document.getElementById(e);return t=document.documentElement.clientWidth>=784?15.5*Math.max(document.documentElement.clientHeight,window.innerHeight||0)/100:160,a.offsetTop-a.scrollTop-t},m=function(e){window.scrollTo({top:s(e),left:0,behavior:"smooth"})},d=(a(22),{en_US:["About","Competencies","Projects","Contact"],pt_BR:["Sobre","Compet\xeancias","Projetos","Contato"]}),u={en_US:["About","Hi, my name's Erick Frederick...","i'm a devloper you can trust","...who is available 24/7/365.","View My Work","Contact Me"],pt_BR:["Sobre","Ol\xe1 meu nome \xe9 Erick Frederick...","sou um desenvolvedor muito confi\xe1vel","...que sempre estar\xe1 dispon\xedvel.","Veja Meu Trabalho","Entre em contato"]},p={en_US:["Competencies","Career","Companies i've worked and what i worked with","Companies i've worked","Technical Support Internship","Monitor and maintain Pitagora's computer systems and networks.","Web Development","Which are my competencies from web development","Others","Which are my competencies aside from web development","Other technologies","Dev Tools"],pt_BR:["Compet\xeancias","Carreira","Empresas com quem eu trabalhei e com o que trabalhei","Empresas com quem eu trabalhei","Est\xe1gio de Suporte T\xe9cnico ","Prover manunten\xe7\xe3o aos aparelhos digitais e de rede da empresa","Desenvolvimento Web","Quais s\xe3o minhas compet\xeancias de desenvolvimento web","Outros","Quais s\xe3o minhas compet\xeancias por fora do desenvolvimento web","Outras tecnologias","Ferramentas Dev"]},_={en_US:["Projects","Live Demo","Source Code"],pt_BR:["Projetos","Ao Vivo","C\xf3digo Fonte"]},E={en_US:["Contact","Let's work together","Message","Thanks!","Submit","Ooops! There was an error."],pt_BR:["Contato","Vamos trabalhar juntos","Menssagem","Obrigado!","Enviar","Ooops! Ocorreu um erro."]};var v=function(){var e=Object(i.c)((function(e){return e.pageLanguage})),t=d[e],a=Object(n.useState)(!0),r=Object(o.a)(a,2),l=r[0],u=r[1],p=Object(n.useState)(["","","",""]),_=Object(o.a)(p,2),E=_[0],v=_[1];Object(n.useEffect)((function(){return window.addEventListener("scroll",b),function(){window.removeEventListener("scroll",b)}}));var f=function(e){var t=e.targetedState,a=e.targetedWaydirect;switch(t){case"waydirect-visibility":u(!l);break;case"waydirect-live-status":for(var n=["","","",""],c=0;c<=a;c++)n[c]="--visited";return n}},b=function(){var e=["","","",""];window.pageYOffset>=s("about")&&(e=f({targetedState:"waydirect-live-status",targetedWaydirect:0}),window.pageYOffset>=s("competencies")&&(e=f({targetedState:"waydirect-live-status",targetedWaydirect:1}),window.pageYOffset>=s("projects")&&(e=f({targetedState:"waydirect-live-status",targetedWaydirect:2}),window.pageYOffset>=s("contact")&&(e=f({targetedState:"waydirect-live-status",targetedWaydirect:3}))))),v(e)},g=function(e){switch(e){case"about":m("about"),f({targetedState:"waydirect-live-status",targetedWaydirect:0});break;case"competencies":m("competencies"),f({targetedState:"waydirect-live-status",targetedWaydirect:1});break;case"projects":m("projects"),f({targetedState:"waydirect-live-status",targetedWaydirect:2});break;case"contact":m("contact"),f({targetedState:"waydirect-live-status",targetedWaydirect:3})}};return c.a.createElement("nav",{className:"wayfinder"},c.a.createElement("ul",{className:"wayfinder__waypaths"},c.a.createElement("li",{id:"wayfinder-about",className:l?"wayfinder__waydirect ".concat(E[0]," --hidden"):"wayfinder__waydirect ".concat(E[0])},c.a.createElement("div",{onClick:function(){return g("about")}},t[0])),c.a.createElement("li",{id:"wayfinder-competencies",className:l?"wayfinder__waydirect ".concat(E[1]," --hidden"):"wayfinder__waydirect ".concat(E[1])},c.a.createElement("div",{onClick:function(){return g("competencies")}},t[1])),c.a.createElement("li",{className:"wayfinder__waysign"},c.a.createElement("p",null,"eFrederick")),c.a.createElement("li",{id:"wayfinder-projects",className:l?"wayfinder__waydirect ".concat(E[2]," --hidden"):"wayfinder__waydirect ".concat(E[2])},c.a.createElement("div",{onClick:function(){return g("projects")}},t[2])),c.a.createElement("li",{id:"wayfinder-contact",className:l?"wayfinder__waydirect ".concat(E[3]," --hidden"):"wayfinder__waydirect ".concat(E[3])},c.a.createElement("div",{onClick:function(){return g("contact")}},t[3]))),c.a.createElement("div",{className:"wayfinder__toggle"},c.a.createElement("div",{className:"wayfinder__hamburguer",onClick:function(){return f({targetedState:"waydirect-visibility"})}})))};a(23),a(4);var f=function(){var e=Object(i.c)((function(e){return e.pageLanguage})),t=u[e];return c.a.createElement("article",{id:"about"},c.a.createElement("div",{className:"title"},t[0]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"about"},c.a.createElement("div",{className:"about__headline"},c.a.createElement("div",{className:"about__headline-comment --start"},c.a.createElement("p",null,t[1])),c.a.createElement("p",null,t[2]),c.a.createElement("div",{className:"about__headline-comment --end"},c.a.createElement("p",null,t[3])),c.a.createElement("div",{className:"about__route"},c.a.createElement("div",{onClick:function(){return m("projects")},className:"about__route-button --to-projects"},t[4]),c.a.createElement("div",{onClick:function(){return m("contact")},className:"about__route-button --to-contact"},t[5]))))))};a(24);var b=function(){var e=Object(i.c)((function(e){return e.pageLanguage})),t=p[e];return c.a.createElement("article",{id:"competencies"},c.a.createElement("div",{className:"title  --reverted"},t[0]),c.a.createElement("div",{className:"container --spaced"},c.a.createElement("div",{className:"competence"},c.a.createElement("div",{className:"competence__headline"},c.a.createElement("div",{className:"competence__name"},c.a.createElement("p",null,t[1])),c.a.createElement("div",{className:"competence__info"},c.a.createElement("p",null,t[2]))),c.a.createElement("div",{className:"competence__description"},c.a.createElement("span",null,t[3]),c.a.createElement("div",{className:"competence__sub-description"},c.a.createElement("p",null,"Faculdade Pit\xe1goras"),c.a.createElement("p",null,t[4]),c.a.createElement("p",null,t[5])))),c.a.createElement("div",{className:"competence"},c.a.createElement("div",{className:"competence__headline"},c.a.createElement("div",{className:"competence__name"},c.a.createElement("p",null,t[6])),c.a.createElement("div",{className:"competence__info"},c.a.createElement("p",null,t[7]))),c.a.createElement("div",{className:"competence__description"},c.a.createElement("span",null,"Front-End"),c.a.createElement("div",{className:"competence__sub-description"},c.a.createElement("p",null,"HTML"),c.a.createElement("p",null,"CSS"),c.a.createElement("p",null,"Sass"),c.a.createElement("p",null,"Javascript"),c.a.createElement("p",null,"React.JS")),c.a.createElement("span",null,"Back-End"),c.a.createElement("div",{className:"competence__sub-description"},c.a.createElement("p",null,"Node.JS")))),c.a.createElement("div",{className:"competence"},c.a.createElement("div",{className:"competence__headline"},c.a.createElement("div",{className:"competence__name"},c.a.createElement("p",null,t[8])),c.a.createElement("div",{className:"competence__info"},c.a.createElement("p",null,t[9]))),c.a.createElement("div",{className:"competence__description"},c.a.createElement("span",null,t[10]),c.a.createElement("div",{className:"competence__sub-description"},c.a.createElement("p",null,"C"),c.a.createElement("p",null,"C# (.net)"),c.a.createElement("p",null,"Java")),c.a.createElement("span",null,t[11]),c.a.createElement("div",{className:"competence__sub-description"},c.a.createElement("p",null,"Visual Studio"),c.a.createElement("p",null,"Visual Studio Code"),c.a.createElement("p",null,"Git"),c.a.createElement("p",null,"Terminal"))))))};a(25);var g=function(){var e=Object(i.c)((function(e){return e.pageLanguage})),t=_[e];return c.a.createElement("article",{id:"projects"},c.a.createElement("div",{className:"title"},t[0]),c.a.createElement("div",{className:"container --spaced-flex"},c.a.createElement("div",{className:"project"},c.a.createElement("div",{className:"project__image --efrederickcli"}),c.a.createElement("div",{className:"project__description"},c.a.createElement("div",{className:"project__title"},"eFrederick CLI"),c.a.createElement("div",{className:"project__outside"},c.a.createElement("a",{className:"project__button",href:"https://pepeyen.github.io/efrederick-cli/",target:"_blank",rel:"noopener noreferrer"},t[1]),c.a.createElement("a",{className:"project__button",href:"https://github.com/pepeyen/efrederick-cli/",target:"_blank",rel:"noopener noreferrer"},t[2])))),c.a.createElement("div",{className:"project"},c.a.createElement("div",{className:"project__image --cstech"}),c.a.createElement("div",{className:"project__description"},c.a.createElement("div",{className:"project__title"},"CS Tech"),c.a.createElement("div",{className:"project__outside"},c.a.createElement("a",{className:"project__button",href:"https://pepeyen.github.io/cs-tech/",target:"_blank",rel:"noopener noreferrer"},t[1]),c.a.createElement("a",{className:"project__button",href:"https://github.com/pepeyen/cs-tech/",target:"_blank",rel:"noopener noreferrer"},t[2])))),c.a.createElement("div",{className:"project"},c.a.createElement("div",{className:"project__image --efrederick"}),c.a.createElement("div",{className:"project__description"},c.a.createElement("div",{className:"project__title"},"eFrederick"),c.a.createElement("div",{className:"project__outside"},c.a.createElement("a",{className:"project__button",href:"https://efrederick.dev/",target:"_blank",rel:"noopener noreferrer"},t[1]),c.a.createElement("a",{className:"project__button",href:"https://github.com/pepeyen/efrederick/",target:"_blank",rel:"noopener noreferrer"},t[2]))))))};a(26);var h=function(){var e=Object(i.c)((function(e){return e.pageLanguage})),t=E[e],a=Object(n.useState)(""),r=Object(o.a)(a,2),l=r[0],s=r[1];return c.a.createElement("article",{id:"contact"},c.a.createElement("div",{className:"title --reverted"},t[0]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"contact"},c.a.createElement("div",{className:"contact__title"},t[1]),c.a.createElement("form",{className:"contact__form",onSubmit:function(e){e.preventDefault();var t=e.target,a=new FormData(t),n=new XMLHttpRequest;n.open(t.method,t.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(t.reset(),s("SUCCESS")):s("ERROR"))},n.send(a)},action:"https://formspree.io/mknqyejb",method:"POST"},c.a.createElement("div",{className:"contact__form-input"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{className:"contact__form-email",type:"email",name:"email"})),c.a.createElement("div",{className:"contact__form-input"},c.a.createElement("label",{htmlFor:"message"},t[2]),c.a.createElement("textarea",{className:"contact__form-message",name:"message"})),c.a.createElement("div",{className:"contact__form-submit"},"SUCCESS"===l?c.a.createElement("p",null,t[3]):c.a.createElement("button",{className:"contact__form-button"},t[4]),"ERROR"===l&&c.a.createElement("p",null,t[5]))))))};a(27);var N=function(){var e=Object(i.b)(),t=Object(n.useState)("en_US"),a=Object(o.a)(t,2),r=a[0],l=a[1],s=function(t){switch(t.preventDefault(),t.target.value){case"en_US":e({type:"SET_EN-US"}),l("en_US");break;case"pt_BR":e({type:"SET_PT-BR"}),l("pt_BR")}};return c.a.createElement("div",{className:"lang-selector"},c.a.createElement("button",{className:"en_US"===r?"lang-selector__button --en_US-active":"lang-selector__button --en_US",value:"en_US",onClick:s},"EN-US"),c.a.createElement("button",{className:"pt_BR"===r?"lang-selector__button --pt_BR-active":"lang-selector__button --pt_BR",value:"pt_BR",onClick:s},"PT-BR"))};a(28);var w=function(){var e=Object(i.c)((function(e){return e.pageLanguage}));return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footer__text"},c.a.createElement("div",{className:"footer__logo"},c.a.createElement("p",null,"eFrederick")),c.a.createElement("div",{className:"footer__social"},c.a.createElement("div",{className:"footer__social-link --spaced-from-top"},c.a.createElement("a",{className:"footer__outside-link",href:"https://www.linkedin.com/in/erick-frederick-c/?locale=".concat(e),target:"_blank",rel:"noopener noreferrer"},"Linkedin")),c.a.createElement("div",{className:"footer__social-link --spaced-from-top"},c.a.createElement("a",{className:"footer__outside-link",href:"https://github.com/pepeyen",target:"_blank",rel:"noopener noreferrer"},"Github"))),c.a.createElement(N,null)))};a(29);var y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement(v,null)),c.a.createElement("main",null,c.a.createElement(f,null),c.a.createElement(b,null),c.a.createElement(g,null),c.a.createElement(h,null)),c.a.createElement("footer",null,c.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(3),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en_US",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EN-US":return"en_US";case"SET_PT-BR":return"pt_BR";default:return e}},j=Object(k.b)({pageLanguage:S}),O=(a(30),a(31),Object(k.c)(j));l.a.render(c.a.createElement(i.a,{store:O},c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.28974cb9.chunk.js.map