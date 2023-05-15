function playSound(audioSelector){
    const element = document.querySelector(audioSelector)
    if(element && element.localName === 'audio'){
        element.play()
    }else{
        console.log('audio not found')
    }
}

const tilesList = document.querySelectorAll('.tecla')

tilesList.forEach(tile => {
    const idInstrument = `#som_${tile.classList[1]}`
    tile.onclick = function(){
        playSound(idInstrument)
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