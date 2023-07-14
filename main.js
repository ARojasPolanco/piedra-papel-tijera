const elementos = {
    1:'Piedra',
    2: 'Papel',
    3:'Tijera'
}

const usuario = window.prompt('Elige:  1 Piedra / 2 Papel / 3 Tijera')


function aleatorio(){
    return Math.floor(Math.random() * 3 ) + 1
}

const pc = aleatorio()


function juego(user, pc){
    let winner = false
if(user < 0 || user > 3){
    alert('Jugada invalida')
} else {
    alert(`usuario: ${elementos[user]} vs pc: ${elementos[pc]}`)
    if(user === pc){
        alert('Empate')
    } else if(user == 1){
        if(pc == 3){
            winner = true
        } 
    } else if(user == 2){
        if(pc == 1){
            winner = true
        }
    } else if(user == 3){
        if(pc == 2){
            winner = true
        }
    } 
}
    return winner
}

if(juego(+usuario, aleatorio())){
    alert('Felicidades ganaste')
} else{
    alert('Intentalo de nuevo')
}
