HOME = "home", ABOUT = "about", CONTACTS = "contacts", HOME_TEXT = "home_text", ABOUT_TEXT = "about_text", CONTACTS_TEXT = "contacts_text";
LANGUAGE_EN = "en", LANGUAGE_PT = "pt", LANG_KEY = "language";
LIST_MENUS = [HOME, ABOUT, CONTACTS];
TEXT_DICT = {
  en:{
    home: "Home",
    about: "About",
    contacts: "Contacts",
    home_text: "Hi this is my home page",
    about_text: "I'm Eduardo Rodrigues, Brazilian, graduated on Universidade Estadual de Montes Claros\
      on Sistemas de Informação course. I have experience on web development backend  (Java, Python, C/C++)\
      and frontend with javascript (with the use of certain frameworks).\
      Nowadays I'm working with JSF with PrimeFaces UI Library. And is this it for while.",
    contacts_text: "Contact me at mrodrigues.eduardo@gmail.com"
  },
  pt:{
    home: "Início",
    about: "Sobre mim",
    contacts: "Contatos",
    home_text: "Olá, está é minha página principal",
    about_text: "Eu sou Eduardo Rodrigues, brasileiro, me formei na Universidade Estadual de Montes Claros\
      no curso de Sistemas de Informação. Tenho experiência no backend desenvolvimento web (Java, Python, C / C ++)\
      e frontend com javascript (com o uso de certos quadros).\
      Hoje em dia eu estou trabalhando com JSF com PrimeFaces Biblioteca UI. E é isso, por enquanto.",
    contacts_text: "Entre em contato em mrodrigues.eduardo@gmail.com"
  }
};
window.onload = function(){
  var host = "eduardorodrigues.me";
  if ((host == window.location.host) && (window.location.protocol != "https:"))
    window.location.protocol = "https";
  if(!localStorage.getItem(LANG_KEY))
    localStorage.setItem(LANG_KEY, LANGUAGE_EN);

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
