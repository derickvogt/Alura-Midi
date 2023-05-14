function tocaSom(idSom){
    document.querySelector(idSom).play()
}

const tilesList = document.querySelectorAll('.tecla')

tilesList.forEach(tile => {
    const idInstrument = `#som_${tile.classList[1]}`
    tile.onclick = function(){
        tocaSom(idInstrument)
    }
})