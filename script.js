const menuIcon = document.querySelector(".menu-icon");

const menu = document.querySelector(".menu");
const body = document.querySelector(".body");

menuIcon.addEventListener("click", function(){
    menuIcon.classList.toggle("active");
    menu.classList.toggle("active");
    
})

menu.addEventListener("click", function(){
    menu.classList.remove("active")

})