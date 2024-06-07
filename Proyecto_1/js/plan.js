function validarFormulario2() {
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    var seleccion = document.getElementById('seleccion').value;

    // Validar que el campo de nombre no contenga números
    if (/\d/.test(nombre)) {
        alert("El campo de nombre no debe contener números.");
        return false;
    }

    // Validar que el campo de teléfono contenga solo números y más de 8 dígitos
    if (isNaN(telefono) || telefono.length <= 7) {
        alert("El campo de teléfono debe contener solo números y más de 8 dígitos.");
        return false;
    }

    if (nombre === "" || telefono === "" || email === "" || mensaje === "" || seleccion === "default") {
        alert("Por favor completa todos los campos y selecciona una opción.");
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert("Por favor ingresa un correo electrónico válido.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}