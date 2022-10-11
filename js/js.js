let inputNombre = document.getElementById("nombre");
let inputMail = document.getElementById("mail");
let inputTelefono = document.getElementById("telefono");
let inputMensaje = document.getElementById("mensaje");
let botonEnviar=document.getElementById("button");

botonEnviar.addEventListener("click", enviarForm);

function enviarForm() {

  if((inputNombre.value=="")||(inputMail.value=="")||(inputTelefono.value=="")||(inputMensaje.value=="")){
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Completa todos los campos'
    })
    e.preventDefault();
  }
  
  Swal.fire({
    title: 'Enviado!',
    text: 'Gracias por tu mensaje, en breve te responderé',
    icon: 'success',
    confirmButtonText:'Ok'
  });

}

inputNombre.oninput=()=>{
    if(isNaN(inputNombre.value)){
        inputNombre.style.color="";
        inputNombre.style.borderColor="";
    }else{
        inputNombre.style.color="red";
        inputNombre.style.borderColor="red";
    }
}

inputTelefono.oninput=()=>{
    if(isNaN(inputTelefono.value)){
        inputTelefono.style.color="red";
        inputTelefono.style.borderColor="red";
    }
    else{
        inputTelefono.style.color="";
        inputTelefono.style.borderColor="";
    }
}

inputMensaje.oninput=()=>{
    if(inputMensaje.value.length<10){
        inputMensaje.style.color="red";
        inputMensaje.style.borderColor="red";
    }else{
        inputMensaje.style.color="";
        inputMensaje.style.borderColor="";
    }
}