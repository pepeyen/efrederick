(this.webpackJsonpefrederick=this.webpackJsonpefrederick||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),o=a(1),i=a(3),s=function(){var e=Object(o.b)(),t=Object(n.useState)("en_US"),a=Object(i.a)(t,2),r=a[0],l=a[1],s=function(t){t.preventDefault(),e({type:"SET_LANGUAGE",targetLanguage:t.target.value}),l(t.target.value),document.documentElement.setAttribute("lang",t.target.value.split("_")[0])};return c.a.createElement("div",{className:"lang-selector"},c.a.createElement("button",{className:"en_US"===r?"lang-selector__button --en_US-active":"lang-selector__button --en_US",value:"en_US",onClick:s},"EN-US"),c.a.createElement("button",{className:"pt_BR"===r?"lang-selector__button --pt_BR-active":"lang-selector__button --pt_BR",value:"pt_BR",onClick:s},"PT-BR"))};var m=function(){var e=Object(o.c)((function(e){return e.pageLanguage}));return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footer__text"},c.a.createElement("div",{className:"footer__logo"},c.a.createElement("p",null,"eFrederick")),c.a.createElement("div",{className:"footer__social"},c.a.createElement("div",{className:"footer__social-link --spaced-from-top"},c.a.createElement("a",{className:"footer__outside-link",href:"https://www.linkedin.com/in/erick-frederick-c/?locale=".concat(e),target:"_blank",rel:"noopener noreferrer"},"Linkedin")),c.a.createElement("div",{className:"footer__social-link --spaced-from-top"},c.a.createElement("a",{className:"footer__outside-link",href:"https://github.com/pepeyen",target:"_blank",rel:"noopener noreferrer"},"Github"))),c.a.createElement(s,null)))},u=function(e){var t,a=document.getElementById(e);t=window.innerWidth>=801?15.5*Math.max(document.documentElement.clientHeight,window.innerHeight||0)/100:160;var n=document.body.getBoundingClientRect();return a.getBoundingClientRect().top-n.top-t},d=function(e){window.scrollTo({top:u(e),left:0,behavior:"smooth"})},p={en_US:["About","Competencies","Projects","Contact"],pt_BR:["Sobre","Compet\xeancias","Projetos","Contato"]},E={en_US:["About","Hi, my name's Erick Frederick...","i'm a developer you can trust","...who is available 24/7/365.","View My Work","Contact Me","lines of code","projects"],pt_BR:["Sobre","Ol\xe1 meu nome \xe9 Erick Frederick...","sou um desenvolvedor muito confi\xe1vel","...que sempre estar\xe1 dispon\xedvel.","Veja Meu Trabalho","Entre em contato","linhas de c\xf3digo","projetos"]},f={en_US:["Competencies","Career","Companies i've worked and what i worked with","Companies i've worked","Technical Support Internship","Monitor and maintain Pitagora's computer systems and networks.","Web Development","Which are my competencies from web development","Others","Which are my competencies aside from web development","Other technologies","Dev Tools"],pt_BR:["Compet\xeancias","Carreira","Empresas com quem eu trabalhei e com o que trabalhei","Empresas com quem eu trabalhei","Est\xe1gio de Suporte T\xe9cnico ","Prover manunten\xe7\xe3o aos aparelhos digitais e de rede da empresa","Desenvolvimento Web","Quais s\xe3o minhas compet\xeancias de desenvolvimento web","Outros","Quais s\xe3o minhas compet\xeancias por fora do desenvolvimento web","Outras tecnologias","Ferramentas Dev"]},v={en_US:["Projects","Live Demo","Source Code"],pt_BR:["Projetos","Demonstra\xe7\xe3o","C\xf3digo Fonte"]},h={en_US:["Contact","Let's work together","Message","Thanks!","Submit","Ooops! There was an error."],pt_BR:["Contato","Vamos trabalhar juntos","Menssagem","Obrigado!","Enviar","Ooops! Ocorreu um erro."]},C=function(){var e=Object(o.c)((function(e){return e.pageLanguage})),t=p[e],a=function(e){var t=e.targetedState,a=e.targetedWaydirect;switch(t){case"waydirect-visibility":document.getElementById("wayfinder-waypaths").childNodes.forEach((function(e){e.id&&"wayfinder-toggle"!==e.id&&(e.className.split(" ").find((function(e){return"--visible"===e}))?e.classList.remove("--visible"):e.classList.add("--visible"))}));break;case"waydirect-live-status":var n=-1,c=document.getElementById(a),r=document.getElementById("wayfinder-waypaths");r.childNodes.forEach((function(e,t){e.id&&e===c&&(n=t)})),r.childNodes.forEach((function(e,t){e.id&&(t<=n?e.classList.add("--visited"):e.classList.remove("--visited"))}))}},r=function(){window.pageYOffset>=0&&(a({targetedState:"waydirect-live-status",targetedWaydirect:"wayfinder-about"}),window.pageYOffset>=u("competencies")&&(a({targetedState:"waydirect-live-status",targetedWaydirect:"wayfinder-competencies"}),window.pageYOffset>=u("projects")&&(a({targetedState:"waydirect-live-status",targetedWaydirect:"wayfinder-projects"}),window.pageYOffset>=u("contact")&&a({targetedState:"waydirect-live-status",targetedWaydirect:"wayfinder-contact"}))))},l=function(e){d(e.currentTarget.id.split("-")[1])};return Object(n.useEffect)((function(){return window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}})),c.a.createElement("nav",{className:"wayfinder",role:"navigation"},c.a.createElement("ul",{id:"wayfinder-waypaths",className:"wayfinder__waypaths"},c.a.createElement("li",{id:"wayfinder-about",className:"wayfinder__waydirect",onClick:l},c.a.createElement("p",null,t[0])),c.a.createElement("li",{id:"wayfinder-competencies",className:"wayfinder__waydirect",onClick:l},c.a.createElement("p",null,t[1])),c.a.createElement("li",{className:"wayfinder__waysign"},c.a.createElement("p",null,"eFrederick")),c.a.createElement("li",{id:"wayfinder-projects",className:"wayfinder__waydirect",onClick:l},c.a.createElement("p",null,t[2])),c.a.createElement("li",{id:"wayfinder-contact",className:"wayfinder__waydirect",onClick:l},c.a.createElement("p",null,t[3])),c.a.createElement("li",{id:"wayfinder-toggle",className:"wayfinder__toggle",onClick:function(){return a({targetedState:"waydirect-visibility"})}},c.a.createElement("div",{className:"wayfinder__hamburguer"},c.a.createElement("svg",{viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M368 207.668H16C7.16797 207.668 0 200.5 0 191.668C0 182.836 7.16797 175.668 16 175.668H368C376.832 175.668 384 182.836 384 191.668C384 200.5 376.832 207.668 368 207.668Z",fill:"#E2F3F5"}),c.a.createElement("path",{d:"M368 85H16C7.16797 85 0 77.832 0 69C0 60.168 7.16797 53 16 53H368C376.832 53 384 60.168 384 69C384 77.832 376.832 85 368 85Z",fill:"#E2F3F5"}),c.a.createElement("path",{d:"M368 330.332H16C7.16797 330.332 0 323.164 0 314.332C0 305.5 7.16797 298.332 16 298.332H368C376.832 298.332 384 305.5 384 314.332C384 323.164 376.832 330.332 368 330.332Z",fill:"#E2F3F5"}))))))},_=function(){var e=Object(o.c)((function(e){return e.pageLanguage})),t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],s=E[e];return Object(n.useEffect)((function(){fetch("".concat("https://efrederick-back-end.herokuapp.com/eFrederick","/api/v1/keys"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({keyId:"ghub:1",keyOrigin:"github"})}).then((function(e){return e.json()})).then((function(e){return e.key})).then((function(e){if(e.api_key_value){var t=document.getElementById("status-list"),a=new Headers;a.append("authorization","token ".concat(e.api_key_value)),(n="pepeyen",c=a,new Promise((function(e,t){fetch("https://api.github.com/users/".concat(n,"/repos"),{headers:c}).then((function(t){e(t.json())})).catch((function(e){t(e)}))}))).then((function(e){return e.map((function(e){return function(e,t,a){return new Promise((function(n,c){fetch("https://api.github.com/repos/".concat(e,"/").concat(t,"/stats/contributors"),{headers:a}).then((function(e){n(e.json())})).catch((function(e){c(e)}))}))}("pepeyen",e.name,a).then((function(e){return e.map((function(e){return e.weeks.reduce((function(e,t){return e+t.a-t.d}),0)}))})).then((function(e){return e.reduce((function(e,t){return e+t}))})).then((function(e){return e}))}))})).then((function(e){return Promise.all(e)})).then((function(e){var a,n=0;e.map((function(e){return n+=e>=300?Math.round(.01*e):e,null})),a=e.length,l({totalLinesOfCode:n,totalNumberOfRepos:a});for(var c=0;c<t.childNodes.length;c++)t.childNodes[c].style.display="block";t.classList.add("--is-active")}))}var n,c}))}),[]),c.a.createElement("article",{id:"about"},c.a.createElement("div",{className:"title"},s[0]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"about"},c.a.createElement("div",{className:"about__headline"},c.a.createElement("div",{className:"about__headline-comment --start"},c.a.createElement("p",null,s[1])),c.a.createElement("p",null,s[2]),c.a.createElement("div",{className:"about__headline-comment --end"},c.a.createElement("p",null,s[3])),c.a.createElement("div",{className:"about__route"},c.a.createElement("button",{onClick:function(){return d("projects")},className:"about__route-button --to-projects"},s[4]),c.a.createElement("button",{onClick:function(){return d("contact")},className:"about__route-button --to-contact --box-shadowed"},s[5]))),c.a.createElement("div",{id:"status-wrapper"},c.a.createElement("ul",{id:"status-list"},c.a.createElement("li",{className:"title"},c.a.createElement("span",null,r.totalLinesOfCode)," ",s[6]),c.a.createElement("li",{className:"title"},c.a.createElement("span",null,r.totalNumberOfRepos)," ",s[7]))))))};var g=function(){var e=Object(o.c)((function(e){return e.pageLanguage})),t=f[e];return c.a.createElement("article",{id:"competencies"},c.a.createElement("div",{className:"title  --reverted"},t[0]),c.a.createElement("div",{className:"container --spaced"},c.a.createElement("div",{className:"competence --box-shadowed"},c.a.createElement("div",{className:"competence__headline"},c.a.createElement("div",{className:"competence__name"},c.a.createElement("p",null,t[1])),c.a.createElement("div",{className:"competence__info"},c.a.createElement("p",null,t[2]))),c.a.createElement("div",{className:"competence__description"},c.a.createElement("span",null,t[3]),c.a.createElement("div",{className:"competence__sub-description"},c.a.createElement("p",null,"Faculdade Pit\xe1goras"),c.a.createElement("p",null,t[4]),c.a.createElement("p",null,t[5])))),c.a.createElement("div",{className:"competence --box-shadowed"},c.a.createElement("div",{className:"competence__headline"},c.a.createElement("div",{className:"competence__name"},c.a.createElement("p",null,t[6])),c.a.createElement("div",{className:"competence__info"},c.a.createElement("p",null,t[7]))),c.a.createElement("div",{className:"competence__description"},c.a.createElement("span",null,"Front-End"),c.a.createElement("div",{className:"competence__sub-description"},c.a.createElement("p",null,"HTML"),c.a.createElement("p",null,"CSS"),c.a.createElement("p",null,"Sass"),c.a.createElement("p",null,"Javascript"),c.a.createElement("p",null,"React.JS")),c.a.createElement("span",null,"Back-End"),c.a.createElement("div",{className:"competence__sub-description"},c.a.createElement("p",null,"Node.JS")))),c.a.createElement("div",{className:"competence --box-shadowed"},c.a.createElement("div",{className:"competence__headline"},c.a.createElement("div",{className:"competence__name"},c.a.createElement("p",null,t[8])),c.a.createElement("div",{className:"competence__info"},c.a.createElement("p",null,t[9]))),c.a.createElement("div",{className:"competence__description"},c.a.createElement("span",null,t[10]),c.a.createElement("div",{className:"competence__sub-description"},c.a.createElement("p",null,"C"),c.a.createElement("p",null,"C# (.net)"),c.a.createElement("p",null,"Java")),c.a.createElement("span",null,t[11]),c.a.createElement("div",{className:"competence__sub-description"},c.a.createElement("p",null,"Visual Studio"),c.a.createElement("p",null,"Visual Studio Code"),c.a.createElement("p",null,"Git"),c.a.createElement("p",null,"Terminal"))))))};var b=function(){var e=Object(o.c)((function(e){return e.pageLanguage})),t=h[e],a=Object(n.useState)(""),r=Object(i.a)(a,2),l=r[0],s=r[1];return c.a.createElement("article",{id:"contact"},c.a.createElement("div",{className:"title --reverted"},t[0]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"contact"},c.a.createElement("form",{className:"contact__form",onSubmit:function(e){e.preventDefault();var t=e.target,a=new FormData(t),n=new XMLHttpRequest;n.open(t.method,t.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(t.reset(),s("SUCCESS")):s("ERROR"))},n.send(a)},action:"https://formspree.io/mknqyejb",method:"POST"},c.a.createElement("div",{className:"contact__title"},t[1]),c.a.createElement("div",{className:"contact__form-input"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{id:"email",name:"email",className:"contact__form-email --box-shadowed",type:"email"})),c.a.createElement("div",{className:"contact__form-input "},c.a.createElement("label",{htmlFor:"message"},t[2]),c.a.createElement("textarea",{id:"message",name:"message",className:"contact__form-message --box-shadowed"})),c.a.createElement("div",{className:"contact__form-submit"},"SUCCESS"===l?c.a.createElement("p",null,t[3]):c.a.createElement("button",{className:"contact__form-button --box-shadowed"},t[4]),"ERROR"===l&&c.a.createElement("p",null,t[5]))),c.a.createElement("svg",{viewBox:"0 0 800 601",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{opacity:"0.25",d:"M712.5 0.293968H87.5C39.2532 0.293968 3.05176e-05 37.5399 3.05176e-05 83.3197V415.422C3.05176e-05 457.177 32.6516 491.831 75 497.603V576.56C75 586.188 81.0578 594.791 90.4328 598.476C93.5453 599.7 96.8 600.294 100.027 600.294C106.519 600.294 112.884 597.883 117.678 593.335L217.678 498.448H712.5C760.747 498.448 800 461.202 800 415.422V83.3197C800 37.5384 760.747 0.293968 712.5 0.293968ZM775 415.422C775 448.123 746.963 474.727 712.5 474.727H212.5C209.184 474.727 206.005 475.976 203.661 478.2L100 576.552V486.587C100 480.037 94.4032 474.727 87.5 474.727C53.0375 474.727 25 448.123 25 415.422V83.3197C25 50.6194 53.0375 24.0156 87.5 24.0156H712.5C746.963 24.0156 775 50.6194 775 83.3197V415.422Z",fill:"#22D1EE"})))))},w=[{projectName:"cs-tech",projectLiveURL:"https://pepeyen.github.io/cs-tech",projectBannerURL:"https://repository-images.githubusercontent.com/245696462/5bab8980-cf60-11ea-95f0-bc5f566cd9e8"},{projectName:"efrederick-cli",projectLiveURL:"https://pepeyen.github.io/efrederick-cli",projectBannerURL:"https://repository-images.githubusercontent.com/275693390/6b759e80-cf5d-11ea-8d8f-a22f2ac03276"},{projectName:"namah",projectLiveURL:"https://pepeyen.github.io/namah",projectBannerURL:"https://repository-images.githubusercontent.com/293850098/ea1a7980-3278-11eb-9f1a-3ff1f4cf768d"},{projectName:"portfolio-api",projectLiveURL:"https://efrederick-back-end.herokuapp.com/namah",projectBannerURL:"https://repository-images.githubusercontent.com/307787791/e805ea00-327b-11eb-9a0c-e060b06e9c28"}];var N=function(){var e=Object(o.c)((function(e){return e.pageLanguage})),t=v[e];return c.a.createElement("article",{id:"projects"},c.a.createElement("div",{className:"title"},t[0]),c.a.createElement("ul",{className:"container --grid-3"},w.map((function(e,a){return c.a.createElement("li",{key:a,className:"project --box-shadowed"},c.a.createElement("div",{className:"project__image"},c.a.createElement("img",{src:e.projectBannerURL,alt:e.projectName})),c.a.createElement("div",{className:"project__description"},c.a.createElement("div",{className:"project__title"},e.projectName),c.a.createElement("div",{className:"project__outside"},c.a.createElement("a",{className:"project__button",href:e.projectLiveURL,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("p",null,t[1]),c.a.createElement("svg",{viewBox:"0 0 480 480",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M240 0C107.453 0 0 107.453 0 240C0 372.547 107.453 480 240 480C372.547 480 480 372.547 480 240C479.852 107.516 372.484 0.148438 240 0ZM447.566 324.078L379.312 335.855C387.125 307.203 391.344 277.691 391.871 248H463.801C462.898 274.117 457.402 299.871 447.566 324.078V324.078ZM16.1992 248H88.1289C88.6563 277.691 92.875 307.203 100.688 335.855L32.4336 324.078C22.5977 299.871 17.1016 274.117 16.1992 248ZM32.4336 155.922L100.688 144.145C92.875 172.797 88.6563 202.309 88.1289 232H16.1992C17.1016 205.883 22.5977 180.129 32.4336 155.922ZM248 128.449C276.746 128.816 305.422 131.434 333.762 136.281L362 141.152C370.676 170.676 375.344 201.23 375.879 232H248V128.449ZM336.488 120.512C307.25 115.516 277.66 112.816 248 112.449V16.4492C293.863 20.8555 333.703 62.8477 356.281 123.961L336.488 120.512ZM232 112.449C202.34 112.816 172.758 115.516 143.52 120.512L123.719 123.938C146.297 62.8086 186.137 20.8008 232 16.4141V112.449ZM146.246 136.281C174.582 131.434 203.254 128.816 232 128.449V232H104.121C104.656 201.23 109.324 170.676 118 141.152L146.246 136.281ZM104.121 248H232V351.551C203.254 351.184 174.578 348.566 146.238 343.719L118 338.848C109.324 309.324 104.656 278.77 104.121 248V248ZM143.512 359.488C172.75 364.492 202.336 367.203 232 367.594V463.594C186.137 459.184 146.297 417.191 123.719 356.078L143.512 359.488ZM248 367.594C277.66 367.203 307.242 364.492 336.48 359.488L356.281 356.062C333.703 417.191 293.863 459.199 248 463.586V367.594ZM333.754 343.719C305.418 348.566 276.746 351.184 248 351.551V248H375.879C375.344 278.77 370.676 309.324 362 338.848L333.754 343.719ZM391.871 232C391.344 202.309 387.125 172.797 379.312 144.145L447.566 155.922C457.402 180.129 462.898 205.883 463.801 232H391.871ZM439.473 138.289L374.047 127C362.285 88.6289 340.281 54.1914 310.398 27.3984C366.277 46.0469 412.617 85.8555 439.473 138.289ZM169.602 27.3984C139.719 54.1914 117.715 88.6289 105.953 127L40.5273 138.289C67.3828 85.8555 113.723 46.0469 169.602 27.3984ZM40.5273 341.711L105.953 353C117.715 391.371 139.719 425.809 169.602 452.602C113.723 433.953 67.3828 394.145 40.5273 341.711ZM310.398 452.602C340.281 425.809 362.285 391.371 374.047 353L439.473 341.711C412.617 394.145 366.277 433.953 310.398 452.602Z",fill:"#E2F3F5"}))),c.a.createElement("div",{className:"project__button-divider"}),c.a.createElement("a",{className:"project__button",href:"https://github.com/pepeyen/".concat(e.projectName),target:"_blank",rel:"noopener noreferrer"},c.a.createElement("p",null,t[2]),c.a.createElement("svg",{viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M256 0C115.301 0 0 116.301 0 257C0 396.883 114.25 512 256 512C397.574 512 512 397.055 512 257C512 116.301 396.699 0 256 0ZM301 477.5C286.602 480.5 271.301 482 256 482C240.699 482 225.398 480.5 211 477.5V407.301C211 390.5 215.5 384.5 221.5 376.398C224.555 372.906 226.398 369.773 240.098 349.102L217 345.5C157.598 336.801 134.199 305.898 124.898 281.898C112.898 249.801 119.199 209.598 140.801 184.102C144.102 180.199 146.801 173.598 144.402 166.699C139.898 152.898 140.5 131 143.5 122.598C159.406 124.871 175.762 136.266 189.402 144.5C195.687 148.168 198.984 147.199 202 147.5C212.961 145.219 230.059 139.699 256.301 139.699C272.5 139.699 289.602 142.098 306.402 146.898C309.406 146.828 314.234 149.383 322.602 144.5C336.859 135.812 352.66 124.809 368.5 122.598C371.5 131 372.102 152.898 367.602 166.699C365.199 173.598 367.898 180.199 371.203 184.102C392.801 209.602 399.102 249.801 387.102 281.898C377.801 305.898 354.402 336.801 295 345.5L271.902 349.102C286.062 370.469 287.555 373.031 290.504 376.398C296.5 384.5 301 390.5 301 407.301V477.5ZM331 468.801V407.301C331 390.199 327.398 378.801 322.598 370.398C368.199 358.102 400.602 331.098 415 292.398C430.301 251.602 423.402 203 397.898 169.398C402.402 149.301 402.402 117.199 391.602 102.199C386.801 95.6016 380.199 92 371.801 92C371.5 92 371.5 92 371.5 92C348.238 93.2578 329.93 104.973 310.301 116.898C292.301 112.098 274 109.699 255.699 109.699C237.102 109.699 218.5 112.398 202.004 116.898C181.34 104.437 163.207 93.2266 139.301 92C131.801 92 125.199 95.6016 120.398 102.199C109.602 117.199 109.602 149.301 114.102 169.398C88.5977 203 81.6992 251.898 97 292.398C111.398 331.098 143.801 358.102 189.402 370.398C185.68 376.91 182.734 385.312 181.574 396.684C172.363 399.859 164.375 400.895 156.945 398.711C149.109 396.395 143.004 391.164 137.699 382.242C125.785 362.227 105.492 345.887 82.3867 348.012L85.0234 377.895C95.7227 376.914 106.371 388.234 111.902 397.566C121.027 412.934 133.32 423.012 148.449 427.48C159.68 430.789 169.945 430.711 181 428.352V468.801C93.6992 438.199 30 354.801 30 257C30 132.801 131.801 30 256 30C380.199 30 482 132.801 482 257C482 354.801 418.301 438.199 331 468.801Z",fill:"#E2F3F5"}))))))}))))},y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement(C,null)),c.a.createElement("main",null,c.a.createElement(_,null),c.a.createElement(g,null),c.a.createElement(N,null),c.a.createElement(b,null)),c.a.createElement("footer",null,c.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(2),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en_US",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LANGUAGE":return t.targetLanguage;default:return e}},L=Object(j.b)({pageLanguage:k}),S=(a(21),Object(j.c)(L));l.a.render(c.a.createElement(o.a,{store:S},c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.097bfa31.chunk.js.map