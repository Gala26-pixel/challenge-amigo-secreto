let amigo = [];

//Se crea un evento que al presionar la tecla enter se ejecute la función agregarAmigo.
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
}
);

//Función para agregar amigos.
//Se crea una función que ya esta especificada en el index.html.
//Se crea una variable llamada inputAmigo que obtiene el valor del input con el id amigo.
//Se crea una variable llamada nombreAmigo que obtiene el valor de inputAmigo.
//Se crea una condición que si no se ingresa un nombre, se manda una alerta.
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
   
    if (!nombreAmigo){
        alert("Ingresa un nombre");
        return;
    }
    //Se agrega el nombre del amigo al arreglo amigo.
    amigo.push(nombreAmigo);
    
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();

    console.log(amigo);
}
//Función para listar amigos en la pantalla.
function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    //Se limpia la lista de amigos. Debo de limpiar la lista de amigos por cada interacion. 
    //porque cuando vuelva a correr la lista debe de "borrar" el nombre aterior porque solo estoy agregando.
    listaAmigos.innerHTML = "";

    for (let i=0; i<amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigo.length < 3){
        alert("Agrega al menos dos amigos");
        return;
    }
    
//Se crea una variable llamada amigoSorteado que obtiene un número aleatorio entre 0 y la longitud del arreglo amigo.
//Se hace esta cuenta dentro del arrego amigo
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `Tu amigo secreto es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";

} 

// Vincular ENTER key al boton de agregar amigo//