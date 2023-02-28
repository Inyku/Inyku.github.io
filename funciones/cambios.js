const mensajeEnviado = document.querySelector('.Envio')
const fondo = document.querySelector('.principal .parteIzq')


document.getElementById('otrofondo').onclick = function(){ 
    fondo.style.backgroundColor = "#E2998A ";
}
document.getElementById('fondoInicial').onclick = function(){ 
    fondo.style.backgroundColor = "rgb(118, 89, 150) ";
}
document.getElementById('boton').onclick = function(){
    document.getElementById('enviomsj').innerHTML = "*Enviado"
    mensajeEnviado.style.color = "#2409CE  ";
}