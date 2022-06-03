
// muda a classe do html
// window.addEventListener("scroll", function(){                             --->> scroll e a funcao
// var frun = document.querySelector("frun");                                --->> busca a tag frun e seleciona
// frun.classList.toggle("Active", this.window.scrollY > 0);                 --->> cria ou muda a classe do frun para Active

window.addEventListener("scroll", function(){
 var header = document.querySelector("header");
 header.classList.toggle("Active", this.window.scrollY > 0);
});

window.addEventListener("scroll", function(){
 var nav = document.querySelector("nav");
 nav.classList.toggle("Active1", this.window.scrollY > 0);
});

function onClickMenu() {
 document.getElementById("menu").classList.toggle("change");
 document.getElementById("nav").classList.toggle("change");
 document.getElementById("menu-bg").classList.toggle("change");
}