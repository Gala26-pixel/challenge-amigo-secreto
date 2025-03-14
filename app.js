let amigo = [];
let amigosSorteados = new Set();

//Se crea un evento que al presionar la tecla enter se ejecute la función agregarAmigo.
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});


function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
   
    if (!nombreAmigo){
        alert("Ingresa un nombre");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
    console.log(amigo);
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i=0; i<amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigo.length < 3){
        alert("Agrega al menos tres amigos");
        return;
    }
    
    
    let amigosDisponibles = amigo.filter(amigo => !amigosSorteados.has(amigo));
    let amigoSorteado = amigosDisponibles[Math.floor(Math.random() * amigosDisponibles.length)];
    
    amigosSorteados.add(amigoSorteado);
   
    document.getElementById("resultado").textContent = `Tu amigo secreto es: ${amigoSorteado}`;

    if (!amigosDisponibles.length){
        alert("Ya todos tienen amigo secreto");
        return;
    }	

} 