const bloques = document.querySelectorAll(".bloque");

bloques.forEach(function(elemento){
    elemento.querySelector(".acordeon").addEventListener("click", function(){
        elemento.classList.toggle("active")             
    })
})