const nombre = document.getElementById("clientname");
const apellidos = document.getElementById("lastname");
const documento = document.getElementById("idclient");
const correo = document.getElementById("email");
const celular = document.getElementById("mobile");
const contrasenia = document.getElementById("password");
const contrasenia2 = document.getElementById("confirmPassword");
const terminosYcondiciones = document.getElementById("termsAndConditions");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("clientname", "Nombre no valido*");
    condicion = false;
  }
  
  if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
    mostrarMensajeError("lastname", "Apellido no valido");
    condicion = false;
  }
  
  if(documento.value.length<1 || documento.value.trim()==""){
    mostrarMensajeError("idclient","Documento no valido ingrese numeros");
    condicion=false;
  }
  
  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("email", "Correo no valido*");
    condicion = false;
  }
  if (celular.value.length != 10 || celular.value.trim() == "" || isNaN(celular.value)) {
    mostrarMensajeError("mobile", "Celular no valido debe ser de 10 digitos");
    condicion = false;
  }
  
  if (contrasenia.value.length < 1 || contrasenia.value.trim() == "") {
    mostrarMensajeError("password", "Contraseña no valida*");
    condicion = false;
  }
  
  if (contrasenia2.value != contrasenia.value) {
    mostrarMensajeError("confirmPassword", "Contraseña error*");
    condicion = false;
  }
  
  if (!terminosYcondiciones.checked) {
    mostrarMensajeError("termsAndConditions", "Acepte los terminos");
    condicion = false;
  } else {
    mostrarMensajeError("termsAndConditions", "");
  }
  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  alert("Datos Guardados Correctamente");
  form.reset();
}
