const prompt = require("prompt-sync")({ sigint: true });

// array para almacenar tareas
let tareas = [];

// funcion para agregar nuevas tareas al array
function agregarTarea (nombreRecibido, fechaLimiteRecibida = null ){
    tareas.push({
        nombre : nombreRecibido,
        completada : false,
        fechaLimite : fechaLimiteRecibida
    });
}

// funcion para eliminar tarea
function eliminarTarea (indice){

    if(indice >= 0 && indice<=tareas.length){
        tareas.splice(indice, 1);
        console.log("tarea eliminada correctamente");
    }
    else{
        console.log("indice de tarea invalido");
    }
}

// funcion para completar tarea
function completarTarea (indice){
    if(indice >=0 && indice<=tareas.length){
        tareas[indice].completada = true;
        console.log("Tarea marcada como finalizada");
    }
    else{
        console.log("indice de tarea invalido");
    }
}

// funcion para editar alguna de las tareas
function editarTarea (indice, nuevoNombre, nuevaFechaLimite = null){
    if(indice>=0 && indice<=tareas.length){
        tareas[indice].nombreRecibido = nuevoNombre;
            if(nuevaFechaLimite !== null){
                tareas[indice].fechaLimite = nuevaFechaLimite;
            }
        console.log("su tarea ha sido editada con exito");
    }
    else{
        console.log("indice de tareas invalido");
    }
}

function mostrarMenu (){
    console.log(" -------------------- Menu -------------------- ");
    console.log(" 1. para agregar una tarea");
    console.log(" 2. para eliminar una tarea");
    console.log(" 3. para marcar como completada una tarea");
    console.log(" 4. para editar una tarea");
    console.log(" 5. para mostrar tareas");
    console.log(" 0. salir");
}

// funcion para interactuar con el usuario
function interaccionUsuario (){
    let opcion = -1;
    while(opcion !== 0){
        mostrarMenu();
        opcion = parseInt(prompt("Digite la opcion a realizar: "));

        switch (opcion) {
            case 0:
                console.log("esperamos verte pronto :)")
                break;
            case 1:
                agregarTarea(prompt("digita el nombre de tu nueva tarea: "), prompt("digita la fecha de tu nueva tarea: "));
                break;
            case 2:
                console.log(tareas);
                eliminarTarea(parseInt(prompt("digite desde el numero 0 la tarea a eliminar: ")));
                break;
            case 3:
                console.log(tareas);
                completarTarea(parseInt(prompt("digite desde el numero 0 la tarea a finalizar: ")));
                break;
            case 4:
                editarTarea(parseInt(prompt("digite desde el numero 0 la tarea a elegir: ")), prompt("digite el nuevo nombre a cambiar: "), prompt("digite la nueva fecha a cambiar: "));
                break;
            case 5:
                console.log(tareas);
                break;
            default:
                console.log("porfavor digite una de las opciones brindadas");
                break;
        }
    }
}

interaccionUsuario();
