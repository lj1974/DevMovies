const search_form = document.querySelector(".form_pesquisa")
const search_input = document.querySelector("#pesquisa")

const background = document.querySelector("#background")
const midias = document.querySelector(".midias")
const aviso = document.querySelector("#aviso")
const body = document.querySelector("body")

search_form.addEventListener("input", () => {
    background.style.display = "none"
    midias.style.display = "none"
    aviso.style.display = "block"
    body.style.justifyContent = "center"
})