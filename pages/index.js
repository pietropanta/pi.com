var txt = document.getElementById('txt')
txt.addEventListener('keydown', text)
var res1 = document.getElementsByClassName('res')[0]
var res2 = document.getElementsByClassName('res')[1]
var sec = document.getElementById('sec')
var img = document.getElementById('img')
document.createElement('clr')


function text (evento){
    document.createElement('clr')
    if (evento.key == 'Enter'){
        if(txt.value.toLowerCase() == 'victor' || txt.value.toLowerCase() == 'cholo' || txt.value.toLowerCase() == 'cacique'){
            res1.innerHTML = `<p>🦧Bem vindo de volta <i><b><u>Lord Cacique</u></b></i>!!🦍</p>`
            img.src = `cacique.png`
            res2.innerHTML = `⭐Sempre bom te ver por aqui🌟`
            sec.style.height = '650px'
            img.style.background = '#d1a426'
        
        }else if(txt.value != '' && txt.value.toLowerCase() != 'pietro'){
            res1.innerText = 'Tem certeza que esse é seu nome?👀'
            sec.style.height = '300px'
            img.src = ''
            res2.innerText = ''
            img.style.background = ''
        }else if(txt.value.toLowerCase() == 'pietro'){
            res1.innerHTML = `💪Esse é o nome do <i><b>Alemão bombado</b></i>👱‍♂️`
            img.src = 'pietrones.png'
            res2.innerHTML = `👑Vulgo <b>Rei Delas</b>👑`
            sec.style.height = '650px'
            img.style.background = '#673f88'
        }
    }
}