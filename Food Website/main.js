const menuBtn =document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const menuBTNicon = document.querySelector("i");

menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");

const isOpen=navLinks.classList.contains("open");
menuBTNicon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");

});