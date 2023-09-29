const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-menu")
const cary = document.querySelectorAll(".cara")

burger.addEventListener("click", function(){
    nav.classList.toggle("show-nav");
    burger.classList.toggle("rotate")
    cary.forEach(function(e){
        e.classList.toggle("dark")
    })
})