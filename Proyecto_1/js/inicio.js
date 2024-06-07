window.onload = function () {
    document.formularioDatos.addEventListener('submit', validarFormulario);
}
function validarFormulario(evObject) {
    evObject.preventDefault();
    var todoCorrecto = true;
    var correctoEmail = true;
    var formulario = document.formularioDatos;
    for (var i = 0; i < formulario.length; i++) {
        if (formulario[i].type == 'text') {
            if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)) {
                alert(formulario[i].name + ' No puede estar vacío o contener sólo espacios en blanco');
                todoCorrecto = false;
            }
        }
    }
    if (!(/\S+@\S+\.\S+/.test(formulario[2].value))) {
        alert('Email no valido...');
        correctoEmail = false;
    }
    if (todoCorrecto == true && correctoEmail == true) {
        formulario.submit();
    }
}