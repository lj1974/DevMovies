const search_form = document.querySelector(".form_pesquisa") 

const tagbtn = document.querySelectorAll(".btn_terciario")
const excluir = document.querySelectorAll(".excluir")


const conteudopag = document.querySelector(".conteudopagina")
const midiabox = document.querySelector(".box_midiainfo")
const midiaunico = document.querySelector(".midia_box")
const fechar = document.querySelector(".fechar")

const windown = "http://127.0.0.1:5500/pages/"

search_form.addEventListener("click", () => {
    window.location.href = windown + "pesquisa.html"
})


excluir.forEach((e) => {
    e.addEventListener("click", () => {
        let parent = e.parentElement
        parent.remove()
    })
})

midiaunico.addEventListener("click", () => {
    conteudopag.style.opacity = "30%"
    midiabox.style.display = "flex"
})


fechar.addEventListener("click", () => {
    conteudopag.style.opacity = "100%"
    midiabox.style.display = "none"
})

