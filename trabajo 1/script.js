const nombre = document.getElementById("nombre");
const Email = document.getElementById("Email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click" ,(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    } else {
        resultado.innerHTML = "solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
});

const validarCampos = ()=>{
    let error = [];
    if(nombre.value.length < 5 || nombre.value.length > 40){
      error[0] = true;
      error[1] = "el nombre es invalido.";
      return error;
    } else if (nombre.value.length < 5 || nombre.value.length > 40 || Email.value.indexOf("@") == -1 ||  Email.value.indexOf(".")  == -1 ) {
        error[0] = true;
        error[1] = "el mail es invalido.";
        return error;
    } else if (materia.value.length < 4 || materia.value.length > 40){
        error[0] = true;
        error[1] = "la materia no existe.";
        return error;
    }
    error[0] = false;
    return error;
}
