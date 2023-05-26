
const campoFilme = document.getElementById('campoFilme')
const campoStreamer = document.getElementById('campoStreamer')


const formfilme = document.getElementById('cadastro_midia')

const formStreamer = document.getElementById('cadastro_streamer')

const seta = document.querySelectorAll('.seta')

campoFilme.addEventListener("click", () => {
    if( formfilme.style.display == 'none')
    {
        formfilme.style.display = 'flex'
        seta[0].classList.toggle('animate');
    }
    else {
        formfilme.style.display = 'none'
        seta[0].classList.remove('animate')
    }
})


campoStreamer.addEventListener("click", () => {
    if( formStreamer.style.display == 'none') 
    {
        formStreamer.style.display = 'flex'
        seta[1].classList.toggle('animate');
    }
    else {
        formStreamer.style.display = 'none'
        seta[1].classList.remove('animate')
    }
})