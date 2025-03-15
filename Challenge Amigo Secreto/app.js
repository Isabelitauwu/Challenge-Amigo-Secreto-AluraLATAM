// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//1. Crear un array para almacenar los nombres
let amigos = [];
//2. Implementa una función para agregar amigos
function agregarAmigo() {
    //Obtener el input y su valor
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios innecesarios

    //Validar que el input no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    // Verificar si el nombre ya está en la lista
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado. No se pueden agregar nombres repetidos.");
        return;
    }

    //Agregar el nombre a la lista
    amigos.push(nombre);

    //Mostrar la lista en la página
    actualizarLista();

    //Limpiar el input después de agregar
    input.value = "";
}

//3. Implementa una función para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}
//4. Implementa una función para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    // Mostrar el resultado en la página
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li> El amix sorteado es: ${amigoSorteado}</li>`;
}

// EXTRA 
//5. Agregar el nombre de amix a la lista cuando se presiona ENTER en el teclado
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  // Verifica si la tecla presionada es "Enter"
        agregarAmigo();  // Llama a la función para agregar el nombre
    }
});

