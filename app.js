const body = document.querySelector("body")
const darklight = document.querySelector("#darklight")

const links = document.querySelectorAll(".links")

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

const slovo = document.querySelector("#slovo")

darklight.addEventListener("click", function(){
    body.classList.toggle("light-mode")
    links.forEach(function(e){
        e.classList.toggle("pokus")
    })

    nav.classList.toggle("show-nav");
    burger.classList.toggle("rotate")
    cary.forEach(function(e){
        e.classList.toggle("dark")
    })
})
