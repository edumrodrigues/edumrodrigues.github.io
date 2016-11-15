HOME = "home", ABOUT = "about", CONTACTS = "contacts", HOME_TEXT = "home_text",
ABOUT_TEXT = "about_text", CONTACTS_TEXT = "contacts_text";
LANGUAGE_EN = "en", LANGUAGE_PT = "pt", LANG_KEY = "language";
LIST_MENUS = [HOME, ABOUT, CONTACTS];
HOST = "eduardorodrigues.me";
TEXT_DICT = {
  en:{
    home: "Home",
    about: "About me",
    contacts: "Contacts",
    home_text: "Welcome to my personal website. Here you can know a little bit \
      about me and about what I do. I recommend that you visit my GitHub profile \
      and my personal blog to see what I'm doing and what I'm working with. \
      Thanks to visit this page and may the force be  with you!",
    about_text: "I'm Eduardo Rodrigues, Brazilian, graduated on Universidade Estadual de Montes Claros\
      on Sistemas de Informação course. I've been doing some programing since 2010 with Java, \
      and I started to love coding. Excited with science and new technologies I always went able \
      to learn more each day. My main experience in software development is in Java \
      and posteriorly with Python in backend. I'm a enthusiastic with Javascript and \
      the new tecnologies around it, like Angular Js, React and Node JS.\
      Specialties: Object-Oriented Programming, Web development (Java EE and Python), Front End \
      Development (Javascript, Angular JS, Primefaces) , Linux (Ubuntu), WildFly Application Server and Tomcat.",
    contacts_text: "Contact me at mrodrigues.eduardo@gmail.com"
  },
  pt:{
    home: "Início",
    about: "Sobre mim",
    contacts: "Contatos",
    home_text: "Bem vindo ao meu site pessoal. Aqui você pode saber um pouco sobre mim e sobre \
      o que eu faço. Eu recomendo que você visite o meu perfil GitHub e meu blog pessoal \
      para ver o que estou fazendo e o que estou trabalhando. Obrigado por visitar esta \
      página e que a força esteja com você!",
    about_text: "Eu sou Eduardo Rodrigues, brasileiro, me formei na Universidade Estadual de Montes Claros\
      no curso de Sistemas de Informação. Eu tenho feito alguma programação desde 2010 com Java, e eu comecei \
      a amar a codificação. Animado com a ciência e as novas tecnologias eu sempre fui capaz de aprender mais \
      a cada dia. Minha experiência principal em desenvolvimento de software é em Java e posteriormente com \
      Python no backend. Eu sou um entusiasta com Javascript e as novas tecnologias ao seu redor, como Angular Js, \
      React e Node JS.\
      Especialidades: Programação Orientada a Objetos, Desenvolvimento Web (Java EE e Python), \
      Desenvolvimento Front-End (Javascript, Angular JS, Primefaces), Linux (Ubuntu), WildFly Application Server \
      e Tomcat",
    contacts_text: "Entre em contato em mrodrigues.eduardo@gmail.com"
  }
};
window.onload = function(){
  if ((HOST == window.location.host) && (window.location.protocol != "https:"))
    window.location.protocol = "https";
  if(!localStorage.getItem(LANG_KEY))
    localStorage.setItem(LANG_KEY, LANGUAGE_EN);
  else
    setLanguage();
  document.querySelector(".link-menu").addEventListener("click", function(e){
    document.querySelectorAll(".active").forEach(function(menuItem){
      menuItem.classList.remove("active");
    });
    document.getElementById("navbar-toggle-cbox").click();
    document.getElementById(e.target.id).classList.add("active");
    setMenu()
  });

  document.querySelector(".lang-group").addEventListener("click", function(e){
    localStorage.setItem(LANG_KEY, e.target.parentElement.id);
    setLanguage();
  });
};

var setMenu = function(){
  var id = document.querySelector(".active").id || HOME;
  document.getElementById("title").textContent = TEXT_DICT[localStorage.getItem(LANG_KEY)][id];
  document.getElementById("text").textContent = TEXT_DICT[localStorage.getItem(LANG_KEY)][id+"_text"];
}

var setLanguage = function(){
  LIST_MENUS.forEach(function(menu){
    document.getElementById(menu).textContent = TEXT_DICT[localStorage.getItem(LANG_KEY)][menu];
  });
  setMenu();
  atualizaActived();
}

var atualizaActived = function(){
  document.querySelectorAll(".actived-img-lang").forEach(function(langLink){
    langLink.classList.remove("actived-img-lang");
  });
  document.getElementById(localStorage.getItem(LANG_KEY)).children[0].classList.add("actived-img-lang");
}
