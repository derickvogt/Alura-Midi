function tocaSom(idSom){
    document.querySelector(idSom).play()
}

const tilesList = document.querySelectorAll('.tecla')

tilesList.forEach(tile => {
    const idInstrument = `#som_${tile.classList[1]}`
    tile.onclick = function(){
        tocaSom(idInstrument)
    }

    tile.onkeydown = function(event){
        if(event.code === 'Enter' || event.code === 'Space'){
            tile.classList.add('ativa')
        }
    }

    tile.onkeyup = function(){
        tile.classList.remove('ativa')
    }
})