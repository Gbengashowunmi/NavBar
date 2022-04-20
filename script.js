const menuIcon = document.querySelector(".menu-icon");

const menu = document.querySelector(".menu");
const body = document.querySelector(".body");

menuIcon.addEventListener("click", ()=> {
    menuIcon.classList.toggle("active");
    menu.classList.toggle("active");
    
})

menu.addEventListener("click", ()=> {
    menu.classList.remove("active")

})
