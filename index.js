window.sr = ScrollReveal()

sr.reveal('.left',
{
    duration:3000,
    interval:106,
    distance:'150%',
    origin :'left'
})

sr.reveal('.img',
{
    duration:3000,
    interval:106,
    distance:'150%',
    origin :'right'
})
sr.reveal('.nav',
{
    duration:2000,
    interval:106,
    distance:'150%',
    origin :'top'
})

let nav = document.querySelector("#info")
let abrir = document.querySelector("#abrir")
let cerrar = document.querySelector("#cerrar")
let main = document.querySelector("#main")
abrir.addEventListener("click",()=>{
    nav.classList.add("activo"),
    main.classList.add("index")
})
cerrar.addEventListener("click",()=>{
    nav.classList.remove("activo"),
    main.classList.remove("index")
})